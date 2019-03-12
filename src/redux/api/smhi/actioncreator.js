import { SEND_SMHI_REQUESTCURRENT, 
    SUCCESS_SMHI_REQUESTCURRENT,
     FAILD_SMHI_REQUESTCURRENT, 
     SEND_SMHI_REQUEST_LASTYEAR, 
     SUCCESS_SMHI_REQUESTLASTYEAR,
     FAILD_SMHI_REQUESTLASTYEAR

    } from './actiontype'


export const sendSmhirequestCurrent = () =>{
    return {
        type: SEND_SMHI_REQUESTCURRENT, 
    
    }
}

export const sendSmhisuccessrequestCurrent =(data)=>{
    return {
        type: SUCCESS_SMHI_REQUESTCURRENT, 
        data: data
    }
}

export const sendSmhifaildrequestCurrent =(data)=>{
    return {
        type: FAILD_SMHI_REQUESTCURRENT, 
        data: data
    }
}

export const sendSmhirequestLastyear =()=>{
    return {
        type: SEND_SMHI_REQUEST_LASTYEAR, 
    }
}
export const sendSmhisuccessrequestLastyear =(data)=>{
    return {
        type: SUCCESS_SMHI_REQUESTLASTYEAR,
        data: data
    }
}
export const sendSmhifaildrequestLastyear=(data)=>{
    return {
        type: FAILD_SMHI_REQUESTLASTYEAR, 
        data: data
    }
}
