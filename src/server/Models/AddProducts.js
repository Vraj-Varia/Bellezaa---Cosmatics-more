const mongoose = require('mongoose')

const AddProductsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String
})

const AddProductModel = mongoose.model("Products", AddProductsSchema)

module.exports = AddProductModel