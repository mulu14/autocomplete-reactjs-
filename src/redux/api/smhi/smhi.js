import {sendSmhirequest, sendSmhisuccessrequest, sendSmhifaildrequest} from './actioncreator'


const url ="https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json"; 


const requestWeatherData =()=>{
    return dispatch =>{
        dispatch(sendSmhirequest())
        return fetch(url, {
            method: "GET"
        })
        .then(response =>response.json())
        .then (data =>{
            dispatch(sendSmhisuccessrequest(data))
        })
        .catch(error =>{
            dispatch(sendSmhifaildrequest(error))
        })
    }
}

export default requestWeatherData; 