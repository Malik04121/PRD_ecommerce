import axios from "axios"
import * as types from "./actionType"

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

const orderMenu=(params)=>(dispatch)=>{
    dispatch(resetState())
    dispatch(menuRequest())
    return axios.get("https://red-houndstooth.cyclic.app/admin")
    .then((res)=>dispatch(menuApiSuccess(res.data)))
    .catch(err=>dispatch(menuError))

}
const customerMenu=(params)=>(dispatch)=>{
    dispatch(resetState())
    dispatch(menuRequest())
    return axios.get("https://red-houndstooth.cyclic.app/user")
    .then((res)=>dispatch(menuApiSuccess(res.data)))
    .catch(err=>dispatch(menuError))

}
export {menuError,menuRequest,menuSuccess,menuApiSuccess,orderMenu,customerMenu,resetState}