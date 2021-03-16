export default function updatePEVStat(selector, batterySize, milesRange){

    return (dispatch) => {
      dispatch({ type: 'UPDATE_PEV_STAT', selector: selector,  batterySize: batterySize, milesRange: milesRange})
  }
}