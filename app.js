const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/ContactDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true, family: 4})
const con = mongoose.connection

con.on('open', function() {
    console.log("Connected...")
})

app.use(express.json())

const alienRouter = require('./routes/contacts')
app.use('/contacts', alienRouter)

app.listen(9000, ()=>{
    console.log("Server started...")
})


