import {sendSmhirequestCurrent,
     sendSmhisuccessrequestCurrent, 
     sendSmhifaildrequestCurrent, 
    } from './actioncreator'



const requestWeatherData =(data)=>{
    return dispatch =>{
        dispatch(sendSmhirequestCurrent())
    return fetch(` https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${data.lon}/lat/${data.lat}/data.json`, {
            method: "GET"
        })
        .then(response =>response.json())
        .then(data =>{
            dispatch(sendSmhisuccessrequestCurrent(data.timeSeries))
        })
        .catch(error =>{
            dispatch(sendSmhifaildrequestCurrent(error))
        })
    
    }
}

export default requestWeatherData; 

/**
 * // sendSmhirequestLastyear, 
    // sendSmhisuccessrequestLastyear, 
   //  sendSmhifaildrequestLastyear
 * .then(()=>{
            dispatch(sendSmhirequestLastyear())
            return fetch(`https://opendata-download-metfcst.smhi.se/api/category/pm3g/version/{version}/geotype/multipoint/validtime/${data.current}/parameter/t/leveltype/${data.lon}/level/${data.lat}/data.json?with-geo=false&downsample=2`, {
                method: "GET"
            })
            `https://opendata-download-metfcst.smhi.se/api/category/pm3g/version/{version}/geotype/multipoint/validtime/${data.current}/parameter/t/leveltype/${data.lon}/level/${data.lat}/data.json?with-geo=false&downsample=2`
            .then(response => response.json())
            .then(jsonlastyear =>{
                dispatch(sendSmhisuccessrequestLastyear(jsonlastyear))
            })
            .catch(errorlastyear=>{
            dispatch(sendSmhifaildrequestLastyear(errorlastyear))
        })
        })
 *  */