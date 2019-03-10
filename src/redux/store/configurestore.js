import { createStore, applyMiddleware } from 'redux'
import rootReducer from './../reducer/rootReducer'
import thunkMiddelware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'



const loggerMiddelware = createLogger(); 

const configureStore =()=>{
    return createStore(
        rootReducer, 
        composeWithDevTools(applyMiddleware(thunkMiddelware, loggerMiddelware))
    )
}

export default configureStore; 

