const userScheema=require("./userModels.js")
const commentSchema=require("./commentsModles.js")
const uploadFile=require("./aws.js")
const resister= async(req,res)=>{
   try { let data= req.body;

    let createdData= await userScheema.create(data)

    return res.status(201).send({statas:true,msg:createdData})
}
catch(error){
    return res.status(500).send({status:false,msg:error.message})
}

}


const comment= async (req,res)=>{
    let data=req.body;
    let file=req.files;

    if(!data) return res.status(400).send({msg:"data is not present"})

let {user,comments}=data
let post=await uploadFile(file[0])
let created=await commentSchema.create({user,comments,post:post})

    return res.status(201).send({data:created})
}


module.exports={resister,comment}