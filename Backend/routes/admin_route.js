const express=require("express")
const { authenticate } = require("../middleware/userAuthentication")
const { OrderModel } = require("../models/admin_model")
require("dotenv").config()
const jwt=require('jsonwebtoken');



const adminRoute=express.Router()

const adminDetail=[{employeId:"TH19021999",userName:"Malik",password:"Malik0412",image:""},
{
    employeId:"TH20021999",
    userName:"Robin",
    password:"Robin0412",
    image:"",
}
]

adminRoute.get("/",async(req,res)=>{
  // let query=req.query
    try{
       const orderdata=await OrderModel.find(req.query)
       res.send(orderdata)
    }
    catch(err){
        res.send("Something went wrong")
    }
})
adminRoute.post("/login",async(req,res)=>{
    const {username,password}=req.body
    try{
     const userdata=adminDetail.find((user) => user.userName === username)
        if(userdata){
            if(userdata.password!==password){
                res.send({msg:"Invalid Password"})
            }
            else{
                // res.send({msg:"Successfully login"})

                const token2= jwt.sign( { userID: userdata._id }, process.env.admin_secret_key);
                console.log(token2)
                res.send({msg:"Login successfully","token2":token2,name:userdata.userName})    
            }
        }
        else{
            res.send({msg:"Username not found"})
        }
    }
    catch(err){
         res.send(err)
    }
})
adminRoute.post("/orderdetail",authenticate,async(req,res)=>{
    const payload=req.body
    try{
      const new_order=new OrderModel(payload)
      await new_order.save()
      res.send("data is added")
    }
    catch(err){
      res.send(err)
    }
})

module.exports={adminRoute}