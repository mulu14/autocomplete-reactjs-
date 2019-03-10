import {combineReducers } from 'redux'
import smhiReducer  from './smhireducer/smhiReducer'




const rootReducer = combineReducers({
    weather: smhiReducer
})

export default rootReducer; 
