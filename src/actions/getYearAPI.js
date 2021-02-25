export default function getYearAPI(){

  return (dispatch) => {
    let parseString = require('xml2js').parseString;
    dispatch({ type: 'START_GET_YEAR_REQUEST' });
    const url = "https://www.fueleconomy.gov/ws/rest/vehicle/menu/year"
    fetch(url)
    .then(response=>response.text())
    .then(xmlstringified => parseString(xmlstringified, function(err, result){
            return (dispatch({type: 'ADD_YEAR', payload: result}))
        })
        )
    }
}