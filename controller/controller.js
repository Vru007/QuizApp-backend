const {Questions} = require("../models/questionSchema.js");
const Results= require("../models/resultSchema.js");
const {ques}=require("../database/data.js");
const {ans} =require("../database/data.js")

async function getQuestion(req,res){
    try{
          const q =await Questions.find();
          res.json(q);
    }
    catch(err){
        res.json(err);
    }
    
    
}
async function insertQuestion(req,res){

      Questions.insertMany({questions:ques,answers:ans})
      .then(function(){ 
        console.log("inserted successfully")
      }).catch(function(err){  
       console.log(err);
    })

    res.end();
 }
 
function deleteQuestion(req,res){
   Questions.deleteMany()
   .then(function(){
    console.log("deleted successfully")
   })
   .catch(function(err){
        console.log(err);   
});
res.end();
}
async function getResult(req,res){
  
  try{
    const resu= await Results.find()
    res.json(resu);
}
catch(err){
  res.json(err);
}
}
function postResult(req,res){
    const {username,result, attempts,points,achieved}=req.body;
     if(!result && !username) throw new Error('Data not provided');

    Results.create({username,result,attempts,points,achieved})
    .then(function(){
        console.log("result saved successfully");
    })
    .catch(function(err){
        console.log(err);
    });
    res.end();
}
function deleteResult(req,res){
    Results.deleteMany()
    .then(function(){
        console.log("result deleted successfully");
    })
    .catch(function(err){
         console.log(err);
    })
    res.end();
}
module.exports = {
    getQuestion,
    insertQuestion,
    deleteQuestion,
    getResult,
    postResult,
    deleteResult
}