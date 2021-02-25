export default function getManufacturerAPI(selection){
    return (dispatch) => {
      let parseString = require('xml2js').parseString;
      dispatch({ type: 'START_GET_MANUFACTURER_REQUEST' });
      const url = `https://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=${selection}`
      fetch(url)
      .then(response=>response.text())
      .then(xmlstringified => parseString(xmlstringified, function(err, result){
              return (dispatch({type: 'ADD_MANUFACTURER', payload: result}))
          })
          )
      }
  }