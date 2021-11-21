export default function setMfgWeight(selector, weight){

  return(dispatch) => {
    dispatch({ type: 'WEIGHT_SET', selector: selector, payload: weight})
  }
}