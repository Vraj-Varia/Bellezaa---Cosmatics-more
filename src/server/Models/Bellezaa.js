const mongoose = require('mongoose')

const BellezaaSchema = new mongoose.Schema({
    name: String,
    contact: Number,
    email: String,
    password: String,
    trialPoints: Number
})

const BellezaaModel = mongoose.model("Register", BellezaaSchema)

module.exports = BellezaaModel