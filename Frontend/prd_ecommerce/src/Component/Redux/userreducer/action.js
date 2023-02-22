import axios from "axios"
import * as types from "./actionType"

const userRequest=()=>{
    return{
        type:types.USER_REQUEST
    }
}
const paymentSuccess=(payload)=>{
    return{
        type:types.PAYMENT_SUCCESS,
        payload
    }
}
const userSuccess=(payload)=>{
    return{
        type:types.USER_SUCCESS,
        payload
    }
}
const userError=()=>{
    return{
        type:types.USER_FAILURE
    }
}

const paymentData=(data)=>(dispatch)=>{
    dispatch(userRequest())
    return axios.post("https://red-houndstooth.cyclic.app/admin/orderdetail",data)
    .then((res)=>dispatch(paymentSuccess(res.data)))
    .catch(err=>dispatch(userError))
}

const userData=(data)=>(dispatch)=>{
    dispatch(userRequest())
    return axios.get("https://red-houndstooth.cyclic.app/product")
    .then((res)=>dispatch(userSuccess(res.data)))
    .catch(err=>dispatch(userError))
}

export {paymentData,userData}