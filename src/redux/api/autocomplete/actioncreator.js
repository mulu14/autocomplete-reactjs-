import {SEND_PLACE_REQUEST, SUCCESS_PLACE_REQUEST, FAILD_PLACE_REQUEST, SEND_ON_PROGRESS} from './actiontype'




export const sendPlacerequest =(data)=>{
    return{
        type: SEND_PLACE_REQUEST, 
        data: data
    }
}

export const sucessPlacerequest =(data)=>{
    return {
        type: SUCCESS_PLACE_REQUEST, 
        data: data
    }
}

export const failedRequest =(data)=>{
    return {
        type: FAILD_PLACE_REQUEST, 
        data: data
    }
}
export const sendRequestProgress =(data)=>{
    return {
        type: SEND_ON_PROGRESS, 
        data: data
    }
}