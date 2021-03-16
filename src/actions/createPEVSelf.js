export default function createPEVSelf(selector){

    return (dispatch) => {
      dispatch({ type: 'CREATE_PEV_SELF', selector: selector })
  }
}