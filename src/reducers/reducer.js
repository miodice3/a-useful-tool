
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

        case 'START_GET_MANUFACTURER_REQUEST':
            return {
                ...state,
                requesting_manufacturer: true
            } 

        case 'ADD_MANUFACTURER':
            // debugger
            return {
                ...state,
                manufacturers: action.payload.menuItems.menuItem.map(manufacturer => manufacturer.text),
                requesting_manufacturer: false
                }

        case 'START_GET_MODEL_REQUEST':
            return {
                ...state,
                requesting_model: true
            } 

        case 'ADD_MODEL':
            // debugger
            return {
                ...state,
                models: action.payload.menuItems.menuItem.map(model => model.text[0]),
                requesting_model: false
                }

        case 'START_GET_VEHICLE_REQUEST':
            return {
                ...state,
                requesting_vehicle: true
            } 

        case 'ADD_VEHICLE':
            debugger
            return {
                ...state,
                vehicle: action.payload.menuItems.menuItem[0].value[0],
                requesting_vehicle: false
                }

        default:
            return state;
    }
}