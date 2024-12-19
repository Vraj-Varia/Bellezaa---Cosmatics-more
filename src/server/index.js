const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const SonomanModel = require('./Models/Sonoman')
const AddProductModel = require('./Models/AddProducts')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/Sonoman")


app.post('/Login', (req, res) => {
    const {email, password} = req.body;
    SonomanModel.findOne({email: email})
    .then(user => {
        if(user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.json("The password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})

app.post('/Register', (req, res) => {
    SonomanModel.create(req.body)
    .then(Register => {res.json(Register)})
    .catch(err => res.json(err))
});

const port = 3001;

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});