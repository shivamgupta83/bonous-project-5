const express  = require("express")
const route  = require("./route.js")
const {default : mongoose} = require("mongoose");
const multer = require("multer");
const app = express()
 

app.use(express.json())
app.use(multer().any())

mongoose.set('strictQuery', true)  
mongoose.connect("mongodb+srv://123:1234@cluster0.pf4v08v.mongodb.net/bonous-5",{
    
useNewUrlparser : true
})
.then(()=> console.log("mongoDb is connected"))
.catch((err) => console.log(err))

app.use("/",route)

app.listen(process.env.PORT ||3000,function(){
    console.log("server running on port"+" "+ (process.env.PORT || 3000) )
})
