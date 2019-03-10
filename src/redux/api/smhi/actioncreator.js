import { SEND_SMHI_REQUEST, SUCCESS_SMHI_REQUEST, FAILD_SMHI_REQUEST} from './actioncreator'


export const sendSmhirequest = (data) =>{
    return {
        action: SEND_SMHI_REQUEST, 
        data: data
    }
}

export const sendSmhisuccessrequest =(data)=>{
    return {
        action: SUCCESS_SMHI_REQUEST, 
        data: data
    }
}

export const sendSmhifaildrequest =(data)=>{
    return {
        action: FAILD_SMHI_REQUEST, 
        data: data
    }
}

