const mongoose = require('mongoose')

const SonomanSchema = new mongoose.Schema({
    name: String,
    contact: Number,
    email: String,
    password: String
})

const SonomanModel = mongoose.model("LoginRegister", SonomanSchema)

module.exports = SonomanModel