const router = require('express').Router();
const error = require('../error/error');
const authentication = require('../middleware/authentication');
const authorization = require('../middleware/authorization');
const Order = require('../model/Order')


// create order [auth] --
// get single order [auth]
// get all orders [auth -admin] --
// update order [auth - admin]
// delete order [auth - admin]
// all order for user [auth]

// cancel order [auth] -



// create order [auth] --
router.post("/create/new", authentication, async (req, res, next) => {

    try {
        console.log(req.body)
        console.log("hit")
        const {
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        } = req.body;

        const order = await Order.create({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            user: req.user._id,

        })


        res.status(201).json({ message: "Order created successfully", order })

    } catch (err) {
        error(err, 400)
    }

})



// get all orders [auth -admin] --

router.get("/", authentication, authorization("admin"), async (req, res,next) => {

    try {


        const allOrder = await Order.find();

        res.status(200).json({ message: "All Order", orders: allOrder })


    } catch (err) {
        error("Order not found", 404)
    }


})


module.exports = router;