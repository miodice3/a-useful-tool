export default function getModelAPI(year, manufacturer, selector){
    return (dispatch) => {
      let parseString = require('xml2js').parseString;
      dispatch({ type: 'START_GET_MODEL_REQUEST', selector: selector });
      const url = `https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=${year}&make=${manufacturer}`
      console.log(url)
      fetch(url)
      .then(response=>response.text())
      .then(xmlstringified => parseString(xmlstringified, function(err, result){
              return (dispatch({type: 'ADD_MODEL', payload: result, selector: selector}))
          })
          )
      }
  }