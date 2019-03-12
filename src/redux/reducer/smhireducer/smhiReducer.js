import { SEND_SMHI_REQUESTCURRENT,
     SUCCESS_SMHI_REQUESTCURRENT,
      FAILD_SMHI_REQUESTCURRENT, 
      SEND_SMHI_REQUEST_LASTYEAR, 
      SUCCESS_SMHI_REQUESTLASTYEAR,
      FAILD_SMHI_REQUESTLASTYEAR
    } from '../../api/smhi/actiontype'



const initialState ={
    sendRequestSmhicurrent : '', 
    successRequestSmhicurrent : [], 
    failedRequestSmhicurrent: '', 
    sendRequestSmhilastyear : '', 
    successRequestSmhilastyear : '', 
    failedRequestSmhilastyear: '', 
    onprogress: ''
}

const smahiReducer =(state=initialState, action)=>{
    switch(action.type){
       case SEND_SMHI_REQUESTCURRENT: 
       return {
           ...state, 
           sendRequestSmhicurrent: action.data
       }
       case SUCCESS_SMHI_REQUESTCURRENT: 
       return {
           ...state, 
           successRequestSmhicurrent: action.data || []
       }
       case FAILD_SMHI_REQUESTCURRENT: 
       return {
           ...state, 
           failedRequestSmhicurrent: action.data
       }
       case SEND_SMHI_REQUEST_LASTYEAR: 
       return {
            ...state, 
            sendRequestSmhilastyear: action.data
       }
       case SUCCESS_SMHI_REQUESTLASTYEAR: 
       return {
           ...state, 
           sendRequestSmhicurrent: action.data
       }
       case FAILD_SMHI_REQUESTLASTYEAR: 
        return {
            ...state, 
            failedRequestSmhilastyear: action.data
        }
       default:
       return state
    }
}


export default smahiReducer; 