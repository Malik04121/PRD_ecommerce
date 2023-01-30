const mongoose =require("mongoose")

const LaptopSchema=mongoose.Schema({
    model:String

})
const LaptopModel=mongoose.model("Laptop",LaptopSchema)

module.exports={LaptopModel}