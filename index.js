const express = require('express')
const mongoose = require('mongoose')
const cors =  require('cors')
const UserModel = require('./Models/User')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json()) 

const PORT = process.env.port || 5000
mongoose.connect(process.env.MONGODB_URL)

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT} port`)
})

app.get('/', (req, res) => {

    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))

})
