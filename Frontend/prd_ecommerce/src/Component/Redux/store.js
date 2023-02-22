
import {legacy_createStore,combineReducers, applyMiddleware} from "redux"
// import { reducer as countReducer} from "./counter/reducer"

import { reducer as menuReducer } from "./adminreducer/reducer"
import { reducer as authReducer } from "./authreducer/reducer"
import { reducer as userReducer } from "./userreducer/reducer"
import thunk from "redux-thunk"

// import { compose } from "redux"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const logger1=(store)=>(next)=>(action)=>{
    // const temp=next(action)
    // return temp}

const Rootreducer=combineReducers({menuReducer,authReducer,userReducer})


// const store=legacy_createStore(Rootreducer,composeEnhancers(applyMiddleware(logger1,logger2)))

const store=legacy_createStore(Rootreducer,applyMiddleware(thunk))

export {store}