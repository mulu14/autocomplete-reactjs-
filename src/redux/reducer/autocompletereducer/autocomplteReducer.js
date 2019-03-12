import {SEND_PLACE_REQUEST, SUCCESS_PLACE_REQUEST, FAILD_PLACE_REQUEST, SEND_ON_PROGRESS} from './../../api/autocomplete/actiontype'



const initialState = {
    sendRequest: '', 
    placesuggestion: [], 
    failedRequest: '',
    onprogress: ''
}


const autoCompleteReducer =(state= initialState, action)=>{
    switch(action.type){
        case SEND_PLACE_REQUEST: 
        return {
            ...state, 
            sendRequest: action.data
        }
        case SEND_ON_PROGRESS: 
        return {
            ...state, 
            onprogress: action.data
        }
        case SUCCESS_PLACE_REQUEST: 
        return {
            ...state, 
            placesuggestion: [...state.placesuggestion, action.data]
        }
        case FAILD_PLACE_REQUEST: 
        return {
            ...state, 
            failedRequest: action.data
        }
        default: 
        return state
    }
}

export default autoCompleteReducer; 