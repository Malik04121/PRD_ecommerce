import * as types from "./actionType"

let initialState={
    isLoading:false,
    menu:"dashboard",
    isError:false
}

const reducer=(oldstate=initialState,action)=>{
     const {type,payload}=action
    switch(type){
        case types.MENU_REQUEST:
            return{...oldstate,isLoading:true}
        
        case types.MENU_SUCCESS:
           return{...oldstate,isLoading:false,menu:payload}
              
        case types.MENU_ERROR:
                return{...oldstate,isLoading:false,isError:true}
        default:
            return oldstate        
    
    }


}
export {reducer}