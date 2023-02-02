const mongoose =require("mongoose")

const AudioSchema=mongoose.Schema({
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
const AudioModel=mongoose.model("Laptop",AudioSchema)

module.exports={AudioModel}