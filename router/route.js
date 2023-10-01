const express=require('express');
const router = express.Router();
const {getQuestion} = require("../controller/controller.js") 
const {insertQuestion} = require("../controller/controller.js");
const {deleteQuestion} = require("../controller/controller.js");
const {getResult}= require("../controller/controller.js");
const {postResult} = require("../controller/controller.js");
const {deleteResult} = require("../controller/controller.js");
/*Question Routes*/
router.get('/questions',getQuestion);
router.post('/questions',insertQuestion);
router.delete('/questions',deleteQuestion);
router.get('/results',getResult);
router.post('/results',postResult);
router.delete('/results',deleteResult);
module.exports=router;

