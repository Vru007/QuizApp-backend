const express=require('express');
const mongoose = require('mongoose')
const cors=require('cors');
const app=express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser")
const router = require("./router/route.js");
const connect = require("./database/connect.js");
const { MongoClient } = require('mongodb');
/* Middlewares */

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
/* App Port */
const port=process.env.PORT ||8000
// const uri=process.env.URI
// connect();
    
const connectDB = async () => {
    try {
      const conn = mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("database connected");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

/* Routes */
app.use('/api',router)

app.get('/', (req, res) => {
try{
     res.json("Get Request")
     
}
catch(err){
    res.json(err);
}
})


connectDB().then(() => {
    app.listen(port, () => {
        console.log("listening for requests");
    })
})
