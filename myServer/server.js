const express = require('express')
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogroutes');
const bodyParser = require("body-parser")
require('dotenv').config()

const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.json())
//connect to mongodb
const dbURI = process.env.dbUri
mongoose.connect(dbURI)
.then((result)=>{
console.log('connected to db')

app.use(blogRoutes);

app.listen(3000 || process.env.PORT)
}
).catch((err)=>console.log(err));
