const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:String,
    password:{
        type:String,
        required:true
    },
    phone:Number,
    cart:[],
    wishlist:[]

})
const UserModel=mongoose.model("User",UserSchema)

module.exports={UserModel}