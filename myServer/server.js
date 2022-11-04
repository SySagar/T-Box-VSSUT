const express = require('express')
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogroutes');
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.json())
//connect to mongodb
const dbURI = 'mongodb+srv://SySagar:sy_sagar123@vssut-api-backend.uznpbh6.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result)=>{
console.log('connected to db')

app.listen(3000)}
).catch((err)=>console.log(err));

app.use(blogRoutes);