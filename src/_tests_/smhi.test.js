
import {sendSmhirequest, sendSmhisuccessrequest, sendSmhifaildrequest} from './../redux/api/smhi/actioncreator'
import {SEND_SMHI_REQUEST, SUCCESS_SMHI_REQUEST, FAILD_SMHI_REQUEST} from './../redux/api/smhi/actiontype'



/* 
 test action creator for redux
*/
describe('actions', ()=>{
    it('should send smhi request', ()=>{
        const data = "Uppsala"
        const expectedAction={
            type: SEND_SMHI_REQUEST, 
             data
        }
       expect(sendSmhirequest(data)).toEqual(expectedAction)
    })
})

describe('actions', ()=>{
    it('should send smhi  success output', ()=>{
        const data = "SucessData"
        const expectedAction={
            type: SUCCESS_SMHI_REQUEST, 
            data
        }
       expect(sendSmhisuccessrequest(data)).toEqual(expectedAction)
    })
})

describe('actions', ()=>{
    it('should send failed data to application', ()=>{
        const data = "FailedData"
        const expectedAction={
            type: FAILD_SMHI_REQUEST, 
             data
        }
       expect(sendSmhifaildrequest(data)).toEqual(expectedAction)
    })
})








