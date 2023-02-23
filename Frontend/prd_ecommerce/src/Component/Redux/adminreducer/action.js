import axios from "axios"
import * as types from "./actionType"


const addUserRequest=()=>{
    return{
        type:types.ADD_USER_REQUEST
    }
}
const addUserSuccess=(status)=>{
    return{
        type:types.ADD_USER_SUCCESS,
        status
    }
}
const addUserError=()=>{
    return{
        type:types.ADD_USER_ERROR
    }
}


const menuRequest=()=>{
    return{
        type:types.MENU_REQUEST
    }
}
const menuSuccess=(payload)=>{
    return{
        type:types.MENU_SUCCESS,
        payload
    }
}
const menuApiSuccess=(payload)=>{
    return{
        type:types.MENU_API_SUCCESS,
        payload
    }
}
const menuError=()=>{
    return{
        type:types.MENU_ERROR
    }
}
const resetState=()=>{
    return{
        type:types.RESET_STATE
    }
}

const addUser=(params)=>async(dispatch)=>{
    try{
         
         const response=await axios.post("https://sangria-crocodile-tux.cyclic.app/admin/orderdetail",params)
           
    }
    catch(error){

    }
}
const orderMenu=(params)=>(dispatch)=>{
    dispatch(resetState())
    dispatch(menuRequest())
    return axios.get("https://sangria-crocodile-tux.cyclic.app/admin")
    .then((res)=>dispatch(menuApiSuccess(res.data)))
    .catch(err=>dispatch(menuError))

}
const customerMenu=(params)=>(dispatch)=>{
    dispatch(resetState())
    dispatch(menuRequest())
    return axios.get("https://sangria-crocodile-tux.cyclic.app/user")
    .then((res)=>dispatch(menuApiSuccess(res.data)))
    .catch(err=>dispatch(menuError))

}
export {menuError,menuRequest,menuSuccess,menuApiSuccess,orderMenu,customerMenu,resetState,addUser}