
import axios from "axios"
import * as types from "./actionType"
  

const userRequest=()=>{
    return{
        type:types.USER_REQUEST
    }
}

const loginUserRequest=()=>{
    return{
        type:types.LOGIN_USER_REQUEST
    }
}
const paymentSuccess=(payload)=>{
    return{
        type:types.PAYMENT_SUCCESS,
        payload
    }
}
const loginUserSuccess=(payload)=>{
    return{
        type:types.LOGIN_USER_SUCCESS,
        payload
    }
}
const userSuccess=(payload)=>{
    return{
        type:types.USER_SUCCESS,
        payload
    }
}
const addressSuccess=()=>{
    return{
        type:types.ADDRESS_SUCCESS
    }
}
const loginUserError=()=>{
    return{
        type:types.LOGIN_USER_FAILURE
    }
}
const userError=()=>{
    return{
        type:types.USER_FAILURE
    }
}

const paymentData=(data)=>(dispatch)=>{
    dispatch(userRequest())
    return axios.post("https://sangria-crocodile-tux.cyclic.app/admin/orderdetail",data)
    .then((res)=>dispatch(paymentSuccess(res.data)))
    .catch(err=>dispatch(userError))
}

const userData=(data)=>(dispatch)=>{
    dispatch(userRequest())
    return axios.get("https://sangria-crocodile-tux.cyclic.app/product")
    .then((res)=>dispatch(userSuccess(res.data)))
    .catch(err=>dispatch(userError))
}
const loginUserData=(data)=>async(dispatch,getState)=>{
    dispatch(loginUserRequest())
    try{
    const { id } = getState().authReducer
          const response=await axios.get(`https://sangria-crocodile-tux.cyclic.app/user?_id=${id}`)
           dispatch(loginUserSuccess(response.data[0]))
          console.log(response.data[0],"userdata is ") 
          
    }
    catch(err){
        dispatch(loginUserError)
    }

}

const prodUpdate=(data)=>(dispatch,getState)=>{
    try{
        const { token } = getState().authReducer
        const { id } = getState().authReducer
        dispatch(userRequest())
        axios.patch(`https://sangria-crocodile-tux.cyclic.app/user/update/${id}`,data,{
            headers: {
                'Authorization': `${token}`
              }
        })
        .then((res)=>console.log(res,"res is this "))
        .catch(err=>console.log(err,"error in catch"))
    }
    catch(err){
        console.log("err is in action js",err)
        dispatch(userError)
    }  
}

const addressUpdate=(data)=>async(dispatch,getState)=>{
    try{
        const { id } = getState().authReducer
        dispatch(userRequest())
        await axios.patch(`https://sangria-crocodile-tux.cyclic.app/user/address/${id}`,data)
        .then((res)=>dispatch(addressSuccess()))
        .catch(err=>console.log(err,"error in catch"))
    }
    catch(err){
        console.log("err is in action js",err)
        dispatch(userError)
    }  
}

export {paymentData,userData,prodUpdate,loginUserData,addressUpdate}