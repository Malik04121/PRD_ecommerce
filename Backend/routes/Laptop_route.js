const express=require("express")
const { LaptopModel } = require("../models/Laptop_model")

const laptoproute=express.Router()

laptoproute.get("/",async(req,res)=>{
    try{
     const laptop=await LaptopModel.find()
     res.send(laptop)
    }
    catch(err){
        console.log(err)
        res.send(error)
    }
})
laptoproute.post("/post",async(req,res)=>{
    const payload=req.body
    try{
      const new_laptop=new LaptopModel(payload)
      await new_laptop.save()
      res.send("data is added")
    }
    catch(err){
      res.send(err)
    }
})
laptoproute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
   try{
      LaptopModel.findByIdAndDelete({"id":id})
      res.send("data is deleted")
   }
   catch(err){
      res.send(err)
   }
})
laptoproute.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
    try{
        await LaptopModel.findByIdAndUpdate({"_id":id},payload)
        res.send("data is updated")
    }
    catch(err){
        console.log(err)
    }
})

module.exports={laptoproute}