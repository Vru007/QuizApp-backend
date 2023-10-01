const mongoose = require("mongoose");

function connectMongo(){
    
     mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true });
     console.log("database connected");
}

module.exports = connectMongo;