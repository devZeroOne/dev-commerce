const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');
const error = require('../error/error');
const jwt = require('jsonwebtoken');
const randomstring = require("randomstring");
// const { findByIdAndUpdate } = require('../model/user');
const nodemailer = require('nodemailer');

//register
//login
// logout
// ---forget:
// step 1: send forget link
// step 2: rest link


router.post("/register", async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.findOne({ email: email })

        if (user) {

            throw error("Already have an account", 400)
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        req.body.password = hash;
        const newUser = new User(req.body);
        const data = await newUser.save();

        res.status(200).json({ message: "User Created Successfully", user: data });

    } catch (err) {
        next(err);
    }
})


router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })

        if (!user) {
            throw error("Invalid Credentials", 404)
        }
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            throw error("Invalid Credentials", 404)
        }
        const token = jwt.sign(user._doc, "dev_commerce", { expiresIn: "2h" });
        res.status(201).json({ message: "Login Successfully", token })


    } catch (err) {
        next(err)
    }
})

router.post("/forget/password", async (req, res, next) => {

    try {
        const { email } = req.body
        const user = await User.findOne({ email: email })

        if (!user) {
            throw error("User Not Found", 404)
        }

        const randomString = randomstring.generate();

        const data = {
            resetPassToken: randomString,
            resetPassExpire: Date.now() + 15 * 60 * 1000,
        }
        let updated = await User.findByIdAndUpdate(user._id, data, { new: true })


        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'thankmamun@gmail.com',
                pass: 'gppbtywgpwvfxgaw'
            }
        });

        var mailOptions = {
            from: 'thankmamun@gmail.com',
            to: email,
            subject: 'DEV Commerce Reset Password Link',
            text: `Your reset token link is https://localhost:8000/api/v1/auth/password/reset/${randomString}-${email}`,
        };

        if (updated) {
            await transporter.sendMail(mailOptions);
            console.log("email sent")
        }

        res.status(200).json({ message: "Please Check your email to get reset password link" })



    } catch (err) {

        next(err)


    }

})


router.put("/password/reset/:token", async (req, res, next) => {

    try {
        const tokenURL = req.params.token;
        const { password, confirmPassword } = req.body;

        const token = tokenURL.split("-")[0];
        const email = tokenURL.split("-")[1];

        const user = await User.findOne({ email: email })

        if (!user) {
            throw error("User Not Found", 404)
        }

        if (user.resetPassExpire < new Date() / 1000) {
            throw error("Reset token expired", 400);
        }
        if (token !== user.resetPassToken) {
            throw error("Reset token Invalid", 400);
        }

        if (password !== confirmPassword) {
            throw error("Password not matched", 500);
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const data = {
            password: hash,
            resetPassToken: null,
            resetPassExpire: null,
        }

        let updated = await User.findByIdAndUpdate(user._id, data, { new: true })

        res.status(200).json({ message: "Password reset successfully", user: updated })


    } catch (err) {
        next(err)
    }

})







module.exports = router;