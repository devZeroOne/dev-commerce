const app = require("./app/app");
const connectDB = require("./db/database");

//config
require("dotenv").config({ path: "./config/.env" })


//global error handler
app.use((err, req, res, next) => {

    const statusCode = err.status ? err.status : 500;
    const message = err.message ? err.message : "Server Error Occurred";

    res.status(statusCode).json({ message })

})



// database connection
connectDB()

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("listening on port ", port)
});