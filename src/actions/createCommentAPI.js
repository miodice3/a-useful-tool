export default function createCommentAPI(fed_id, selector, comment){
    debugger
    return (dispatch) => {
      dispatch({ type: 'START_ADD_COMMENT', selector: selector });
      const url = `http://localhost:3000/comments`
      fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
              comment: {id: fed_id,
                comment: comment}
          })
          })

    //   .then(response=>response.text())
    //   .then(xmlstringified => parseString(xmlstringified, function(err, result){
    //           return (dispatch({type: 'START_ADD_DETAIL', selector: selector, payload: result}))
    //       })
    //       )
    //   }
  }
}


//   fetch(`http://localhost:3000/schedules/${e.target.dataset.id}`, {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         id: e.target.dataset.id,
//         time_off: e.target.value,
//         left_right: e.target.className
//     })
//     })
//     .then(function(){
//         fetchAppliances()
//         total.hidden = ""
//         minTotal.hidden = ""
//         savingsTotal.hidden = ""
//         savingsTotalAnnual.hidden = ""
//     })


//   return (dispatch) => {
//     dispatch({ type: 'START_ADD_FORECAST_REQUEST' });
//     fetch(url)
//     .then(response=>response.json())
//     .then(json=> {
//         dispatch({type: 'ADD_FORECAST', payload: json.data})
//     })
// }