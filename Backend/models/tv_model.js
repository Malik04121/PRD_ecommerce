const mongoose =require("mongoose")

const TVSchema=mongoose.Schema({
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
const TvModel=mongoose.model("Tv",TVSchema)

module.exports={TvModel}