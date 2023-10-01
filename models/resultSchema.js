const mongoose =require("mongoose");

const resultModel=mongoose.Schema({
    result:{type:Array, default:[]},
    username:{type:String},
    attempts:{type:Number,default:0},
    points:{type:Number,default:0},
    achived:{type:String,default:""},
    createdAt:{type:Date,default:Date.now()},
});

const results=mongoose.model('results',resultModel);
module.exports = results 
