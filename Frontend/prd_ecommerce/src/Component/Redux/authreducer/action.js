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


const adminLoginRequest=()=>{
    return{
        type:types.ADMIN_LOGIN_REQUEST
    }
}
const adminLoginSuccess=(token2,name)=>{
    return{
        type:types.ADMIN_LOGIN_SUCCESS,
        payload:token2,
        username:name
    }
}
const adminLoginError=()=>{
    return{
        type:types.ADMIN_LOGIN_ERROR
    }
}
const registerRequest=()=>{
    return{
        type:types.REGISTER_REQUEST
    }
}
const registerSuccess=(msg,status)=>{
    return{
        type:types.REGISTER_SUCCESS,
        msg:msg,
        status
    }
}
const registerError=(status)=>{
    return{
        type:types.REGISTER_ERROR,
        status
    }
}

const resetState=()=>{
    return{
        type:types.RESET_STATE
    }
}
// const registerError=()=>{
//     return{
//         type:types.USER_LOGIN_ERROR
//     }
// }


const logoutSuccess=()=>{
    return{
        type:types.USER_LOGOUT_SUCCESS
    }
}


const login=(params)=>(dispatch)=>{
    dispatch(loginRequest)
    return axios.post('https://sangria-crocodile-tux.cyclic.app/user/login',params)
    .then((r)=>{
        console.log(r,"res is after login")

        dispatch(loginSuccess(r.data.token,r.data.id,r.data.displayName,r.data.userData))
    })
    .catch((e)=>{
        console.log(e,"error is")
        dispatch(loginError())})
}
const userRegister=(params)=>(dispatch)=>{
    // dispatch(resetState())
    dispatch(registerRequest)
    return axios.post('https://sangria-crocodile-tux.cyclic.app/user/signup',params)
    .then((r)=>{
        console.log("response after register is ",r)
        dispatch(registerSuccess(r.data.msg,r.status))
    })
    .catch((e)=>{
        console.log(e,"error is")
        // dispatch(registerError(e.response.status))
    })
    // dispatch(resetState)

}
const adminLogin=(params)=>(dispatch)=>{
    dispatch(adminLoginRequest)
    return axios.post('https://sangria-crocodile-tux.cyclic.app/admin/login',params)
    .then((r)=>{
        console.log(r,"res is")
        dispatch(adminLoginSuccess(r.data.token2,r.data.name))
    })
    .catch((e)=>{
        console.log(e,"error is this")
        dispatch(adminLoginError())})
}



// const register=(params)=>(dispatch)=>{
//    let customConfig = {
//         headers: {
//         'Content-Type': 'application/json'
//         }
//     };
//     return axios.post('https://red-houndstooth.cyclic.app/user/signup',params,customConfig)
//     .then((r)=>{
//         console.log(r,"res og register is")
//         dispatch(registerSuccess(r.data))
//     })
//     .catch((err)=>{
//         dispatch(registerError())
//     })
// }

export {loginError,loginRequest,loginSuccess,logoutSuccess,login,adminLogin,adminLoginError,adminLoginRequest,adminLoginSuccess,userRegister}