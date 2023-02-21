const mongoose =require("mongoose")

const orderSchema=mongoose.Schema({
    user:{},
    payment:String,
    paymentStatus:String,
    updateOn:{
        type: Date,
        default: () => new Date().setHours(0, 0, 0, 0)
      }

})
const OrderModel=mongoose.model("Order",orderSchema)

module.exports={OrderModel}