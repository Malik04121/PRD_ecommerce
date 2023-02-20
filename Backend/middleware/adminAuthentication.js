const jwt=require("jsonwebtoken")
require("dotenv").config()

const adminAuthentication=(req,res,next)=>{
    const token=req.headers.authorization
    // console.log(token,"token is")
    if(token){
        const decoded=jwt.verify(token,process.env.admin_secret_key)
        console.log(decoded)
        if(decoded){
            next()
        }
        else{
            res.send("please login first")
        }
    }
    else{
        res.send("please login")
    }
}
module.exports={authenticate}