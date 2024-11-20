const mongoose = require('mongoose')

const detailsSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number
})


const detailsModel = mongoose.model("Products", detailsSchema)

module.exports = detailsModel()