const express= require("express")




const app = express
// route imports

const product = require("./routes/productRoute");
 
app.use("api/v1", product)

module.exports = app
