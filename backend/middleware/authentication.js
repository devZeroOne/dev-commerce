const User = require('../model/user');
const jwt = require('jsonwebtoken');
const error = require('../error/error');


// take token from string[main token]
// check token verify or not : if token is not verify return with status code 403, message: unauthorized 
// find user with decoded token data: if not find user[ status code 403, message: unauthorized ]
// if found user: req.user = founded user

const isAuthenticated = async (req, res, next) => {

    try {

        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            throw error("Unauthorized", 403);
        }


        const decoded = await jwt.verify(token, "dev_commerce");

        if (!decoded) {
            throw error("Unauthorized", 403);
        }

        

        const user = await User.findById(decoded._id)

        if (!user) {
            throw error("Unauthorized", 403);
        }

        req.user = user;

        next()

    } catch (err) {

        next(err);

    }
}


module.exports = isAuthenticated