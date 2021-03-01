export default function getModelAPI(year, manufacturer, model, selector){
    // debugger
    return (dispatch) => {
      let parseString = require('xml2js').parseString;
      dispatch({ type: 'START_GET_VEHICLE_REQUEST', selector: selector });
      const url = `https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=${year}&make=${manufacturer}&model=${model}`
      console.log(url)
      fetch(url)
      .then(response=>response.text())
      .then(xmlstringified => parseString(xmlstringified, function(err, result){
              return (dispatch({type: 'ADD_VEHICLE', selector: selector, payload: result}))
          })
          )
      }
  }