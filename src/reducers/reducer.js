
export default function reducer(state={}, action){
    switch (action.type){
        case 'START_ADD_FORECAST_REQUEST':
            // debugger
            return {
                ...state,
                requesting: true
            }  
        case 'ADD_FORECAST':
            // debugger
            return {
                ...state,
                forecasts: action.payload.map(schedule => schedule),
                requesting: false
                }       
        default:
            return state;
    }
}