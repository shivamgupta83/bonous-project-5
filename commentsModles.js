const mongoose=require("mongoose");

const commentSchema= new mongoose.Schema({

user:{
    type:String,
    require:true,
    trim:true
},

comments:[{
    type: String,
    trim:true,
    }],

post:{
    type:String,
    }

},{timestamps:true})

module.exports=mongoose.model("comment",commentSchema)