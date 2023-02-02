const mongoose =require("mongoose")



const MobileSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image1:String,
    productImage:[
        {img:{type:String}}
    ],
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    rating:Number,
    brand:{
        type:String,
        required:true
    },
    specification:[{}],
    updateOn:Date

})
const MobileModel=mongoose.model("Laptop",MobileSchema)

module.exports={MobileModel}