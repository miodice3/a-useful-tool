export default function setSelectedManufacturer(selectedManufacturer, selector){

    return (dispatch) => {
      dispatch({ type: 'MANUFACTURER_SELECTED', selector: selector,  payload: selectedManufacturer})
  }
}