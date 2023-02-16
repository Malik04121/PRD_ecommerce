
import {legacy_createStore,combineReducers, applyMiddleware} from "redux"
// import { reducer as countReducer} from "./counter/reducer"
import { reducer } from "./authreducer/reducer"
import thunk from "redux-thunk"

// import { compose } from "redux"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const logger1=(store)=>(next)=>(action)=>{
    // const temp=next(action)
    // return temp}

// const Rootreducer=combineReducers({TodoReducer,AuthReducer})


// const store=legacy_createStore(Rootreducer,composeEnhancers(applyMiddleware(logger1,logger2)))

const store=legacy_createStore(reducer,applyMiddleware(thunk))

export {store}