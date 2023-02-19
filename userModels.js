const mongoose=require("mongoose")

const user=new mongoose.Schema({
name:{
    type:String,
    require:true
},
},{timestamps:true})

module.exports=mongoose.model("user",user)