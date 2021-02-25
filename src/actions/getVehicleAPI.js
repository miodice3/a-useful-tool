export default function getModelAPI(year, manufacturer, model){
    return (dispatch) => {
      let parseString = require('xml2js').parseString;
      dispatch({ type: 'START_GET_VEHICLE_REQUEST' });
      const url = `https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=${year}&make=${manufacturer}&model=${model}`
      console.log(url)
      fetch(url)
      .then(response=>response.text())
      .then(xmlstringified => parseString(xmlstringified, function(err, result){
              return (dispatch({type: 'ADD_VEHICLE', payload: result}))
          })
          )
      }
  }