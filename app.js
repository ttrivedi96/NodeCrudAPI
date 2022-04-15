const express = require('express')
const app = express();
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/personDB'



mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const personRouter = require('./routes/person')
app.use('/person',personRouter)

app.listen(9000, () => {
    console.log('Server started')
})