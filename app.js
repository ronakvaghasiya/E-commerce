require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()

mongoose
    .connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('DB conected')
    })
    .catch(()=>{
        console.log('DB is ooops')
    })

const port = 8000

app.listen(port, () => {
    console.log(`App is Runing is ${port}`)
})
