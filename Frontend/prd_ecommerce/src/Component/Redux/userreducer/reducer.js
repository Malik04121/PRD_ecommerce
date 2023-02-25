import * as types from "./actionType"

let initialState={
    isLoading:false,
    userData:null,
    data:null,
    isError:false
}

const reducer=(oldstate=initialState,action)=>{
     const {type,payload,cartTotal}=action

    switch(type){
        case types.USER_REQUEST:
            return{...oldstate,isLoading:true}
        
        case types.LOGIN_USER_REQUEST:
                return{...oldstate,isLoading:true}
        
        case types.PAYMENT_SUCCESS:
           return{...oldstate,isLoading:false,data:payload}

        case types.ADDRESS_SUCCESS:
            return{...oldstate,isLoading:false}

        case types.USER_SUCCESS:
           return{...oldstate,isLoading:false,data:payload}
           
        case types.LOGIN_USER_SUCCESS:
            return{...oldstate,isLoading:false,userData:payload}
             
               
         case types.LOGIN_USER_FAILURE:
                 return{...oldstate,isLoading:false,isError:true}
            
              
        case types.USER_FAILURE:
                return{...oldstate,isLoading:false,isError:true}


        default:
            return oldstate        
    
    }


}
export {reducer}