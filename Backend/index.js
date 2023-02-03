const cors = require("cors");

const express=require("express")
const {connection}=require("./config/db")
require("dotenv").config()

const { productroute } = require("./routes/Product_route")

const app=express()
app.use(
    cors({
      origin: "*",
    })
  );
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to home page")
  })
app.use("/product",productroute)

app.listen(process.env.port,async()=>{
    try{
       await connection
       console.log("connected to db")
    }
    catch(err){
        console.log(err)
    }
    console.log(`Server is running at port ${process.env.port}`)
})
