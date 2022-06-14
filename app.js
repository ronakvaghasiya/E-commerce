require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const authRoutes = require('./routes/auth')

// DB connection
mongoose
    .connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('DB conected')
        const port = 8000

        app.listen(port, () => {
            console.log(`App is Runing is ${port}`)
        })
    })
    .catch(() => {
        console.log('DB is ooops')
    })

//Middelware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Route
app.use('/api', authRoutes)
