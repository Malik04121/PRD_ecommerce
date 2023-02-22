import * as types from "./actionType"

let initialState={
    isLoading:false,
    data:null,
    isError:false
}

const reducer=(oldstate=initialState,action)=>{
     const {type,payload}=action

    switch(type){
        case types.USER_REQUEST:
            return{...oldstate,isLoading:true}
        
        case types.PAYMENT_SUCCESS:
           return{...oldstate,isLoading:false,data:payload}

        case types.USER_SUCCESS:
           return{...oldstate,isLoading:false,data:payload}
            
              
        case types.USER_FAILURE:
                return{...oldstate,isLoading:false,isError:true}


        default:
            return oldstate        
    
    }


}
export {reducer}