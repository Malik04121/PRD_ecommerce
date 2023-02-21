const mongoose =require("mongoose")

const ProductSchema=mongoose.Schema({
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
    originalPrice:Number,
    category:{
        type:String,
        required:true
    },
    rating:Number,
    type:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    specification:[{}],
    updateOn:Date

})
const ProductModel=mongoose.model("product",ProductSchema)

module.exports={ProductModel}