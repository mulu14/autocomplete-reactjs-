import { SEND_SMHI_REQUEST, SUCCESS_SMHI_REQUEST, FAILD_SMHI_REQUEST} from './actiontype'


export const sendSmhirequest = () =>{
    return {
        type: SEND_SMHI_REQUEST, 
    
    }
}

export const sendSmhisuccessrequest =(data)=>{
    return {
        type: SUCCESS_SMHI_REQUEST, 
        data: data
    }
}

export const sendSmhifaildrequest =(data)=>{
    return {
        type: FAILD_SMHI_REQUEST, 
        data: data
    }
}

