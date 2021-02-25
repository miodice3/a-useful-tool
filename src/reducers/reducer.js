
export default function reducer(state={}, action){
    switch (action.type){
        case 'START_ADD_FORECAST_REQUEST':
            return {
                ...state,
                requesting: true
            }  
        case 'ADD_FORECAST':
            return {
                ...state,
                forecasts: action.payload.map(schedule => schedule),
                requesting: false
                }

        case 'START_GET_YEAR_REQUEST':
            return {
                ...state,
                requesting_year: true
            } 

        case 'ADD_YEAR':
            // debugger
            return {
                ...state,
                years: action.payload.menuItems.menuItem.map(year => year),
                requesting_year: false
                }

        default:
            return state;
    }
}