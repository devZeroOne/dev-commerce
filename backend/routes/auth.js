const router = require('express').Router();

const {
    registerController,
    loginController,
    forgetPasswordController,
    passwordResetController
} = require('../controller/auth');

//register
//login
// logout
// ---forget:
// step 1: send forget link
// step 2: rest link




router.post("/register", registerController)
router.post('/login', loginController)
router.post("/forget/password", forgetPasswordController)
router.put("/password/reset/:token", passwordResetController)




module.exports = router;