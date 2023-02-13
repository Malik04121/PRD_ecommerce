const express=require("express")
const { authenticate } = require("../middleware/userAuthentication")
const { ProductModel } = require("../models/Product_model")

const productroute=express.Router()

// productroute.use(authenticate)
productroute.get("/",async(req,res)=>{
    const query=req.query
     const min=req.query.minprice
     const max=req.query.maxprice
    try{
        if(min && max){
            const laptop=await ProductModel.find({price:min})
            res.send(laptop)
        }
        else{
            const laptop=await ProductModel.find(query)
            res.send(laptop)
        }
         
       }
       catch(err){
        //    console.log(err)
           res.send(error)
       }

})

productroute.post("/post",authenticate,async(req,res)=>{
    const payload=req.body
    try{
      const new_laptop=new ProductModel(payload)
      await new_laptop.save()
      res.send("data is added")
    }
    catch(err){
      res.send(err)
    }
})
productroute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
   try{
      ProductModel.findByIdAndDelete({"id":id})
      res.send("data is deleted")
   }
   catch(err){
      res.send(err)
   }
})
productroute.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
    try{
        await ProductModel.findByIdAndUpdate({"_id":id},payload)
        res.send("data is updated")
    }
    catch(err){
        console.log(err)
    }
})

module.exports={productroute}