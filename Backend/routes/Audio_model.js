const express=require("express")
const { AudioModel } = require("../models/audio_model")

const audioroute=express.Router()

audioroute.get("/",async(req,res)=>{
    try{
     const audio=await AudioModel.find()
     res.send(audio)
    }
    catch(err){
        console.log(err)
        res.send(error)
    }
})
audioroute.post("/post",async(req,res)=>{
    const payload=req.body
    try{
      const new_audio=new AudioModel(payload)
      await new_audio.save()
      res.send("data is added")
    }
    catch(err){
      res.send(err)
    }
})
audioroute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
   try{
      AudioModel.findByIdAndDelete({"id":id})
      res.send("data is deleted")
   }
   catch(err){
      res.send(err)
   }
})
audioroute.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
    try{
        await AudioModel.findByIdAndUpdate({"_id":id},payload)
        res.send("data is updated")
    }
    catch(err){
        console.log(err)
    }
})

module.exports={audioroute}