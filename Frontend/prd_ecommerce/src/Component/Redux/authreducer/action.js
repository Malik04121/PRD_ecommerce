import axios from "axios"
import * as types from "./actionType"


const loginRequest=()=>{
    return{
        type:types.USER_LOGIN_REQUEST
    }
}
const loginSuccess=(token,Id,username,user)=>{
    return{
        type:types.USER_LOGIN_SUCCESS,
        payload:token,
        id:Id,
        user:user,
        username:username
    }
}
const loginError=()=>{
    return{
        type:types.USER_LOGIN_ERROR
    }
}
const logoutSuccess=()=>{
    return{
        type:types.USER_LOGOUT_SUCCESS
    }
}


const login=(params)=>(dispatch)=>{
    dispatch(loginRequest)
    return axios.post('https://red-houndstooth.cyclic.app/user/login',params)
    .then((r)=>{
        console.log(r,"res is")
        dispatch(loginSuccess(r.data.token,r.data.id,r.data.displayName,r.data.userData))
    })
    .catch((e)=>{
        console.log(e,"error is")
        dispatch(loginError())})
}

export {loginError,loginRequest,loginSuccess,logoutSuccess,login}