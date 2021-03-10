export default function retrieveCommentsAPI(fed_id, selector){
    // debugger    
    return (dispatch) => {
      dispatch({ type: 'START_LOADING_BACKEND_COMMENTS', selector: selector });
      const url = `http://localhost:3000/comments/${fed_id}`
      fetch(url)
      .then(function(object){
          return object.json()
      })
      .then(comments=> dispatch({ type: 'LOADING_BACKEND_COMMENTS', selector: selector, comments}))
  }
}