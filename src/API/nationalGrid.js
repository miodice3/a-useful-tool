export function nationalGridAPI(){
    return (dispatch) => {
        dispatch({ type: 'START_ADD_FORECAST_REQUEST' });
        fetch('https://api.carbonintensity.org.uk/intensity/2021-02-23T21:15Z/fw48h')
        .then(response=>response.json())
        .then(json=> {
            dispatch({type: 'ADD_FORECAST', payload: json.data})
        })
    }
  }