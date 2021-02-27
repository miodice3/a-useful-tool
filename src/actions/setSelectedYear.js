export default function setSelectedYear(selectedYear, selector){

    return (dispatch) => {
      dispatch({ type: 'YEAR_SELECTED', selector: selector,  payload: selectedYear})
  }
}