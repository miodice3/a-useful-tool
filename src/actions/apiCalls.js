export function nationalGridAPI(){
    let pingInfo = new Date()
    pingInfo.setDate(pingInfo.getDate() - 1)
    // debugger
    let year = pingInfo.getUTCFullYear() // year given is actual year, ISO 8601 no adjustment needede
    
    let month // **range 0-11 ISO 8601 +1 adjustment needed 
    if (pingInfo.getUTCMonth() <= 8){
        month = "0"+ (pingInfo.getUTCMonth()+1)
    } else {
        month = ""+(pingInfo.getUTCMonth()+1)
    }

    let day // day given is actual day, 5th is 5th ISO 8601 no adjustment needede
    if (pingInfo.getUTCDate() <= 9){
        day = "0" + (pingInfo.getUTCDate())
    } else {
        day = pingInfo.getUTCDate()
    }


    let hour // range 0-23, ISO 8601 no adjustment needede
    if (pingInfo.getUTCHours() <= 9) {
        hour = "0" + (pingInfo.getUTCHours())
    } else {
        hour = pingInfo.getUTCHours()
    }

    let min
    if (pingInfo.getUTCMinutes > 45){
        min = "45"
    } else if (pingInfo.getUTCMinutes > 30){
        min = "30"
    } else if (pingInfo.getUTCMinutes > 15){
        min = "15"
    } else {
        min = "00"
    }

    let url = `https://api.carbonintensity.org.uk/intensity/${year}-${month}-${day}T${hour}:${min}Z/fw48h`

    return (dispatch) => {
        dispatch({ type: 'START_ADD_FORECAST_REQUEST' });
        fetch(url)
        .then(response=>response.json())
        .then(json=> {
            dispatch({type: 'ADD_FORECAST', payload: json.data})
        })
    }
  }