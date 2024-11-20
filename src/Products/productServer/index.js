const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const detailsModel = require('./models/details');

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Sonoman")

app.get('/getProducts', (req, res) => {
    detailsModel.findOne()
    .then(products => res.json(products))
    .catch((err => res.json(err)))
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})