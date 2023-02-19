const express= require("express");
const { resister, comment } = require("./controller.js");
const router=express.Router()




router.post("/resister",resister)

router.post("/postComment",comment)

module.exports=router