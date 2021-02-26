export default function getVehcileDetailsAPI(id){
    // debugger
    return (dispatch) => {
      let parseString = require('xml2js').parseString;
      dispatch({ type: 'START_GET_DETAIL_REQUEST' });
      const url = `https://www.fueleconomy.gov/ws/rest/vehicle/${id}`
      fetch(url)
      .then(response=>response.text())
      .then(xmlstringified => parseString(xmlstringified, function(err, result){
              return (dispatch({type: 'ADD_DETAIL', payload: result}))
          })
          )
      }
  }