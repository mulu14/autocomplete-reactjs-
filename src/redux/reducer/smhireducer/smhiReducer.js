import { SEND_SMHI_REQUEST, SUCCESS_SMHI_REQUEST, FAILD_SMHI_REQUEST} from '../../api/smhi/actiontype'




const initialState ={
    sendRequestSmhi : '', 
    successRequestSmhi : '', 
    failedRequestSmhi: '', 
    onprogress: ''
}

const smahiReducer =(state=initialState, action)=>{
    switch(action.type){
       case SEND_SMHI_REQUEST: 
       return {
           ...state, 
           sendRequestSmhi: action.data
       }
       case SUCCESS_SMHI_REQUEST: 
       return {
           ...state, 
           successRequestSmhi: action.data
       }
       case FAILD_SMHI_REQUEST: 
       return {
           ...state, 
           failedRequestSmhi: action.data
       }
       default:
       return state
    }
}


export default smahiReducer; 