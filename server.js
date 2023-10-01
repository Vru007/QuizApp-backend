const express=require('express');
const cors=require('cors');
const app=express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser")
const router = require("./router/route.js");
const connect = require("./database/connect.js");
/* Middlewares */

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
/* App Port */
const port=process.env.PORT ||8000;

connect();

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


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})