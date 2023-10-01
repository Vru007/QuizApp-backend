const mongoose =require("mongoose");


const questionModel=mongoose.Schema({
    questions:{type:Array, default:[]},
    answers:{type:Array, default:[]},
    createAt:{type:Date,default:Date.now()},
});

const Questions= mongoose.model('Questions',questionModel);
module.exports={Questions};