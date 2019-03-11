import {combineReducers } from 'redux'
import smhiReducer  from './smhireducer/smhiReducer'
import autoCompleteReducer from './autocompletereducer/autocomplteReducer'




const rootReducer = combineReducers({
    authcomplete: autoCompleteReducer, 
    weather: smhiReducer, 
})

export default rootReducer; 
