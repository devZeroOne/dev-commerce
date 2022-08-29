const router = require('express').Router();
const authRouter = require('./auth')
router.get("/health", (req, res) => {
    res.status(200).json({ message: "success" })
})

router.use("/api/v1/auth", authRouter)




module.exports = router;