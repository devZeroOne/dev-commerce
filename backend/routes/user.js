// all user [auth-admin] -
// single user [auth] - 

// delete user [auth-admin]
// update user [auth]

const router = require('express').Router();
const User = require('../model/user');
const authentication = require('../middleware/authentication');
const authorization = require('../middleware/authorization');



// single user [auth] - 
router.get('/me', authentication, async (req, res, next) => {

    console.log(req);

    res.status(200).json({ message: "Success", user: req.user });

})


// all user [auth-admin] - 
router.get('/admin/users', authentication, authorization("admin"), async (req, res, next) => {

    const users = await User.find()

    res.status(200).json({ message: "Success", users });

})


module.exports = router