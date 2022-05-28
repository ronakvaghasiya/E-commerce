require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const app = express();
console.log(process.env.URL)

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
    console.log("DB conected")
})

const port = 8000;

app.listen(port, () => {
  console.log(`App is Runing is ${port}`);
});  
