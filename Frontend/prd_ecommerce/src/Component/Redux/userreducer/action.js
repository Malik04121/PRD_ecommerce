
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
const loginUserSuccess=(payload,cartTotal)=>{
    return{
        type:types.LOGIN_USER_SUCCESS,
        payload,
        cartTotal
    }
}
const userSuccess=(payload)=>{
    console.log(
        "payload is this",payload
    );
    
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
    return axios.post("https://techhunt-backend-1.onrender.com/admin/orderdetail",data)
    .then((res)=>dispatch(paymentSuccess(res.data)))
    .catch(err=>dispatch(userError))
}

const userData=(data)=>(dispatch)=>{
    dispatch(userRequest())
    return axios.get("https://techhunt-backend-1.onrender.com/product")
    .then((res)=>{
        // console.log("data is this",res.data)
        dispatch(userSuccess(res.data))
})
    .catch(err=>dispatch(userError))
}
const loginUserData=(data)=>async(dispatch,getState)=>{
    dispatch(loginUserRequest())
    try{
    const { id } = getState().authReducer
    console.log("data fecthed")
          const response=await axios.get(`https://techhunt-backend-1.onrender.com/user?_id=${id}`)
          console.log("parsed data is this",response.data[0])
          const totalPrice = response.data[0].cart.reduce((total, item) =>{
            if (response.data[0].cart.length> 0) { // check if cart is not empty
              return total + item.price;
            } else {
              return total;
            }
          },0)
          console.log("totalPrice in action",totalPrice)
          dispatch(loginUserSuccess(response.data[0],totalPrice))
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
        axios.patch(`https://techhunt-backend-1.onrender.com/user/update/${id}`,data,{
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
        await axios.patch(`https://techhunt-backend-1.onrender.com/user/address/${id}`,data)
        .then((res)=>dispatch(addressSuccess()))
        .catch(err=>console.log(err,"error in catch"))
    }
    catch(err){
        console.log("err is in action js",err)
        dispatch(userError)
    }  
}
const addProduct=(data)=>(dispatch,getState)=>{
    try{
        const { token2 } = getState().authReducer
        // const { id } = getState().authReducer
        dispatch(userRequest())
        axios.post("https://techhunt-backend-1.onrender.com/product/post",data,{
            headers: {
                'Authorization': `${token2}`
              }
        })
        .then((res)=>console.log(res,"res is this afetr post "))
        .catch(err=>console.log(err,"error in catch"))
    }
    catch(err){
        console.log("err is in action js",err)
        dispatch(userError)
    }  
}

export {paymentData,userData,prodUpdate,loginUserData,addressUpdate,addProduct}