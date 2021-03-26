export default function toggleDarkMode(){

    return (dispatch) => {
      dispatch({ type: 'TOGGLE_DARK_MODE' })
  }
}