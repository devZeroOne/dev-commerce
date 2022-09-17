const router = require('express').Router();
const error = require('../error/error');
const authentication = require('../middleware/authentication');
const authorization = require('../middleware/authorization');
const Product = require('../model/Product');
const ProductApiFeatures = require('../utils/ProductApiFeatures');


//get all product --
// get single product --
// get product by  [{filter-price,category}, search, pagination] ***
// create product --
// update product 
// delete product 

// create product review --
// get product review
// delete product review
// update product review

// get admin add all product 
// get product by category 







router.get("/", async (req, res, next) => {

    try {
        // console.log(req.query);


        const productPerPage = 3;




        let productApiFeatures = new ProductApiFeatures(Product.find(), req.query).search().filter().pagination(productPerPage)


        let products = await productApiFeatures.product

        // const products = await Product.find({})

        res.status(200).json({ message: "all products", products: products })

    } catch (err) {
        error(err, 404);
    }

})


router.get("/:id", async (req, res, next) => {

    try {


        const products = await Product.findById(req.params.id)

        res.status(200).json({ message: "Product Details", product: products })

    } catch (err) {
        error(err, 404);
    }

})


router.post('/create', authentication, authorization("admin"), async (req, res, next) => {

    try {

        console.log(req.body, "product details");

        const { name, description, price, category } = req.body;
        const product = new Product({
            name,
            description,
            price,
            category,
            user: req.user._id,
            image: [{ publicID: "5555", url: "http://gapagdgfdgdd.com" }]
        })


        let newProduct = await product.save();
        res.status(201).json({ message: "Product created successfully", product: newProduct })


    } catch (err) {
        error(err, 400)
    }

});

/**
 * input rating[comment, rating,productId]
 * find product by productId
 * check already reviewed[ if reviewed then update ]
 * otherwise create new review
 * 
 * calculate avg rating and update 
 * 
 * and now save and update product
 */

router.post("/review/create", authentication, async (req, res, next) => {

    try {
        console.log("hit");
        const { rating, comment, productId } = req.body;
        const review = {
            user: req.user._id,
            name: req.user.name,
            rating: Number(rating),
            comment
        }
        console.log(req.body);
        const findProduct = await Product.findById(productId);

        const isReviewed = findProduct.reviews.find(rev => rev.user.toString() === req.user._id.toString())

        if (isReviewed) {

            findProduct.reviews.forEach((rev) => {

                if (rev.user.toString() === req.user._id.toString()) {
                    rev.rating = Number(rating);
                    rev.comment = comment
                }

            })

        } else {
            findProduct.reviews.push(review);
        }


        let totalRating = findProduct.reviews.reduce((prev, cur) => cur.rating + prev, 0);
        findProduct.ratings = totalRating / findProduct.reviews.length;


        await findProduct.save({ validateBeforeSave: false });

        res.status(201).json({ message: "review success" })


    } catch (err) {
        error(err, 400)
    }


})

module.exports = router;