import { SEND_SMHI_REQUEST,
     SUCCESS_SMHI_REQUEST,
      FAILD_SMHI_REQUEST, 
    } from '../../api/smhi/actiontype'



const initialState ={
    sendRequest : '', 
    successRequest : [], 
    failedRequest: '', 
    onprogress: ''
}

const smahiReducer =(state=initialState, action)=>{
    switch(action.type){
       case SEND_SMHI_REQUEST: 
       return {
           ...state, 
           sendRequest: action.data
       }
       case SUCCESS_SMHI_REQUEST: 
       return {
           ...state, 
           successRequest: action.data || []
       }
       case FAILD_SMHI_REQUEST: 
       return {
           ...state, 
           failedRequest: action.data.message
       }
       default:
       return state
    }
}


export default smahiReducer; 