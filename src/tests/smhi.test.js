import {SEND_SMHI_REQUESTCURRENT,
    SUCCESS_SMHI_REQUESTCURRENT,
     FAILD_SMHI_REQUESTCURRENT} from './../redux/api/smhi/actiontype'

    import {sendSmhirequestCurrent,
    sendSmhisuccessrequestCurrent, 
    sendSmhifaildrequestCurrent, 
   } from './../redux/api/smhi/actioncreator'




describe('action', ()=>{
    it('create action for sending weather request', ()=>{
        const text = "Send weather request text"
        const expectedAction ={
            type: SEND_SMHI_REQUESTCURRENT, 
            text
        }
        expectedAction(sendSmhirequestCurrent(text)).toEqual(expectedAction)
    })
})