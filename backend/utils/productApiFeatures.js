class ProductApiFeatures {

    constructor(product, query) {

        this.product = product;
        this.query = query;
    }

    search() {
        console.log(this.query)
        const keyword = this.query.keyword ? {
            name: {
                $regex: this.query.keyword,
                $options: "i"
            }
        } : {}
        this.product = this.product.find({ ...keyword });
        return this

    }

    filter() {
        const queryCpy = { ...this.query };

        let removeQuery = ["keyword", "page", 'limit'];

        // console.log(queryCpy, "before");

        removeQuery.forEach(item => delete queryCpy[item])

        // console.log(queryCpy, "after");

        let queryString = JSON.stringify(queryCpy);

        // console.log(queryString)

        queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, (x) => `$${x}`)

        // console.log(queryString)

        this.product = this.product.find(JSON.parse(queryString))
        return this;

    }

    pagination(productPerPage) {

        const currentPage = Number(this.query.page);

        const skipProduct = productPerPage * (currentPage - 1)

        this.product = this.product.limit(productPerPage).skip(skipProduct)


        return this


    }





}

module.exports = ProductApiFeatures