

import { savedata,loaddata, removedata } from "../utils/localstorage"
import * as types from "./actionType"

const initialState={
    user:loaddata("user")||{},
    isAuth:loaddata("login")||false,
    token:loaddata("token")||"",
    id:loaddata("id")||"",
    username:loaddata("username")||"",
    isAuthLoading:false,
    isAuthError:false
}

const reducer=(oldstate=initialState,action)=>{
    const {type,payload,id,username,user}=action
   switch(type){
    case types.USER_LOGIN_REQUEST:
        return{...oldstate,isAuthLoading:true}
    case types.USER_LOGIN_SUCCESS:
       
        savedata("user",oldstate.user=user)
        savedata("login",oldstate.isAuth=true)
        savedata("token",oldstate.token=payload)
        savedata("id",oldstate.id=id)
        savedata("username",oldstate.username=username)
        return{...oldstate,isAuthLoading:false,token:payload,isAuth:true,id:id,username:username,user:user}
    case types.USER_LOGIN_ERROR:
        return{...oldstate,isAuthLoading:false,isAuth:false,isAuthError:true}

    case types.USER_LOGOUT_SUCCESS:
        removedata("user")
        removedata("login")
        removedata("token")
        removedata("id")
        removedata("username")
        return{...oldstate,isAuth:false,token:"",user:{},id:"",username:""}

    default:
        return oldstate   
    }

} 
export {reducer}