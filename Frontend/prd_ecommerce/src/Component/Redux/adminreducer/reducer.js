import * as types from "./actionType"

let initialState={
    isLoading:false,
    menu:"dashboard",
    status:"",
    data:null,
    isError:false
}

const reducer=(oldstate=initialState,action)=>{
     const {type,payload,status}=action
    switch(type){
        case types.ADD_USER_REQUEST:
            return{...oldstate,isLoading:true}
         
        case types.ADD_USER_SUCCESS:
           return{...oldstate,isLoading:false,status:status}
        
        case types.ADD_USER_ERROR:
            return{...oldstate,isLoading:false,isError:true}
            
        case types.MENU_REQUEST:
            return{...oldstate,isLoading:true}
        
        case types.MENU_SUCCESS:
           return{...oldstate,isLoading:false,menu:payload}

        case types.MENU_API_SUCCESS:
            return{...oldstate,isLoading:false,data:payload}
              
        case types.MENU_ERROR:
                return{...oldstate,isLoading:false,isError:true}

        case types.RESET_STATE:
            return {...oldstate,isLoading:false,data:null,isError:false}

        default:
            return oldstate        
    
    }


}
export {reducer}