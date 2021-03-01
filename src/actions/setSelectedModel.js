export default function setSelectedModel(selectedModel, selector){

    return (dispatch) => {
      dispatch({ type: 'MODEL_SELECTED', selector: selector,  payload: selectedModel})
  }
}