export default function createCommentAPI(fed_id, selector, e){
    debugger
    return (dispatch) => {
      let parseString = require('xml2js').parseString;
      dispatch({ type: 'START_ADD_DETAIL', selector: selector });
      const url = `https://www.fueleconomy.gov/ws/rest/vehicle/${fed_id}`
      fetch(url)
      .then(response=>response.text())
      .then(xmlstringified => parseString(xmlstringified, function(err, result){
              return (dispatch({type: 'START_ADD_DETAIL', selector: selector, payload: result}))
          })
          )
      }
  }