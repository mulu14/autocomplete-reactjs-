import {sendPlacerequest, sucessPlacerequest, failedRequest, sendRequestProgress} from './actioncreator'

let placename = '' 

//const URL_AUTOCOMPLETE = "https://maps.googleapis.com/maps/api/place/autocomplete/xml?input="+placename+"&key="+process.env.REACT_APP_KEY

const headers = {
    "Content-Type": "application/json; charset=utf-8", 
    "Access-Control-Allow-Origin": "*"
}



const autocomplete= (name) => {
    return (dispatch) => {
        dispatch(sendPlacerequest({name}))
        return fetch("https://maps.googleapis.com/maps/api/place/autocomplete/xml?input="+name+"&types=geocode&&key=AIzaSyCa770mwmHoo5dowkYfoiC5mV8XKkK6SI0", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json; charset=utf-8", 
                "Access-Control-Allow-Origin": "*",
            }, 
            mode: 'no-cors',
            body: JSON.stringify({
        
            })
        })
        .then(res => console.log(res))
       
    }}

    export default autocomplete; 
