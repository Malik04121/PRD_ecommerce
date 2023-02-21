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
const menuError=()=>{
    return{
        type:types.MENU_ERROR
    }
}
export {menuError,menuRequest,menuSuccess}