export default function createCommentAPI(fed_id, selector, comment){
    // debugger    
    return (dispatch) => {
      dispatch({ type: 'ADD_COMMENT', fed_id: fed_id, selector: selector, comment: comment });
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
  }
}