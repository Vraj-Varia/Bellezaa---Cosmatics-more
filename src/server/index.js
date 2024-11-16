const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const SonomanModel = require('./Models/Sonoman')

const app = express()
app.use(express.json())
app.use(cors)


mongoose.connect("mongodb://127.0.0.1:27017/Sonoman")


app.post('/LoginRegister', (req, res) => {
    SonomanModel.create(req.body)
    .then(LoginRegister => res.json(LoginRegister))
    console.log(LoginRegister)
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})