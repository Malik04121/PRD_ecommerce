const express=require("express")
// const { MobileModel } = require("../models/mobile_model")
const { MobileModel } = require("../models/mobile_model")

const mobileroute=express.Router()

mobileroute.get("/",async(req,res)=>{
    try{
     const mobile=await MobileModel.find()
     res.send(mobile)
    }
    catch(err){
        console.log(err)
        res.send(error)
    }
})
mobileroute.post("/post",async(req,res)=>{
    const payload=req.body
    try{
      const new_mobile=new MobileModel(payload)
      await new_mobile.save()
      res.send("data is added")
    }
    catch(err){
      res.send(err)
    }
})
mobileroute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
   try{
      MobileModel.findByIdAndDelete({"id":id})
      res.send("data is deleted")
   }
   catch(err){
      res.send(err)
   }
})
mobileroute.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
    try{
        await MobileModel.findByIdAndUpdate({"_id":id},payload)
        res.send("data is updated")
    }
    catch(err){
        console.log(err)
    }
})

module.exports={mobileroute}