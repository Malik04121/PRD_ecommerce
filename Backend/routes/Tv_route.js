const express=require("express")
const { TvModel } = require("../models/tv_model")

const tvroute=express.Router()

tvroute.get("/",async(req,res)=>{
    try{
     const tv=await TvModel.find()
     res.send(tv)
    }
    catch(err){
        console.log(err)
        res.send(error)
    }
})
tvroute.post("/post",async(req,res)=>{
    const payload=req.body
    try{
      const new_tv=new TvModel(payload)
      await new_tv.save()
      res.send("data is added")
    }
    catch(err){
      res.send(err)
    }
})
tvroute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
   try{
      TvModel.findByIdAndDelete({"id":id})
      res.send("data is deleted")
   }
   catch(err){
      res.send(err)
   }
})
tvroute.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
    try{
        await TvModel.findByIdAndUpdate({"_id":id},payload)
        res.send("data is updated")
    }
    catch(err){
        console.log(err)
    }
})

module.exports={tvroute}