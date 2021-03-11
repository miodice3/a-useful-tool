
export default function reducer(state={ vehicles: {} }, action){ switch (action.type){

    // dispatch({type: '@@INIT'})

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

            var newState = {
                ...state
            }

            var vehicle = {}
            if (state.vehicles[action.selector]) {
                vehicle = state.vehicles[action.selector]
            }

            newState.vehicles[action.selector] = {
                ...vehicle,
                loading: true,
                years: [],
                manufacturers: [],
                loading_manufacturers: false,
                selectedYear: null,
                should_display_models: false,
                should_display_manufacturers: false,
                vehicle_emissions: 0
            }
            return newState

        case 'ADD_YEAR':
            var newState = {
                ...state
            }
            vehicle = state.vehicles[action.selector]
            newState.vehicles[action.selector] = {
                ...vehicle,
                loading: false,
                years: action.payload.menuItems.menuItem.map(year => year)
            }
            return newState

        case 'YEAR_SELECTED':
            var newState = {
                ...state
            }
            vehicle = state.vehicles[action.selector]
            newState.vehicles[action.selector] = {
                ...vehicle,
                selectedYear: action.payload,
                selectedManufacturer: "",
                selectedModel: "",
                fedID_number: null,
                should_display_models: false,
                vehicle_emissions: 0
            }
            return newState;

        case 'START_GET_MANUFACTURER_REQUEST':
            var newState = {...state}

            var vehicle = {}
            if (state.vehicles[action.selector]) {
                vehicle = state.vehicles[action.selector]
            }

            newState.vehicles[action.selector] = {
                ...vehicle,
                loading_manufacturers: true,
                manufacturers: [],
                selectedManufacturer: "",
                vehicle_emissions: 0
            }
            return newState

        case 'ADD_MANUFACTURER':

            var newState = {...state}

            var vehicle = {}
            if (state.vehicles[action.selector]) {
                vehicle = state.vehicles[action.selector]
            }

            newState.vehicles[action.selector] = {
                ...vehicle,
                loading_manufacturers: false,
                should_display_manufacturers: true,
                manufacturers: action.payload.menuItems.menuItem.map(manufacturer => manufacturer.text)
            }
            return newState

        case 'MANUFACTURER_SELECTED':
            var newState = {
                ...state
            }
            vehicle = state.vehicles[action.selector]
            newState.vehicles[action.selector] = {
                ...vehicle,
                selectedManufacturer: action.payload,
                selectedModel: "",
                fedID_number: null,
                vehicle_emissions: 0
            }
            return newState;

        case 'START_GET_MODEL_REQUEST':
            var newState = {...state}

            var vehicle = {}
            if (state.vehicles[action.selector]) {
                vehicle = state.vehicles[action.selector]
            }

            newState.vehicles[action.selector] = {
                ...vehicle,
                requesting_model: true,
                models: [],
                selectedModel: "",
                vehicle_emissions: 0
            }
            return newState

        case 'ADD_MODEL':
            var newState = {...state}

            var vehicle = {}
            if (state.vehicles[action.selector]) {
                vehicle = state.vehicles[action.selector]
            }

            newState.vehicles[action.selector] = {
                ...vehicle,
                requesting_model: false,
                should_display_models: true,
                models: action.payload.menuItems.menuItem.map(model => model.text[0])
            }
            return newState

            case 'MODEL_SELECTED':
                var newState = {
                    ...state
                }
                vehicle = state.vehicles[action.selector]
                newState.vehicles[action.selector] = {
                    ...vehicle,
                    selectedModel: action.payload
                }
                return newState;

        case 'START_GET_VEHICLE_REQUEST':
            var newState = {...state}

            var vehicle = {}
            if (state.vehicles[action.selector]) {
                vehicle = state.vehicles[action.selector]
            }

            newState.vehicles[action.selector] = {
                ...vehicle,
                requesting_fedID_number: true,
                fedID_number: null
            }
            return newState

        case 'ADD_VEHICLE':

            var newState = {...state}

            var vehicle = {}
            if (state.vehicles[action.selector]) {
                vehicle = state.vehicles[action.selector]
            }

            newState.vehicles[action.selector] = {
                ...vehicle,
                requesting_fedID_number: false,
                fedID_number: action.payload.menuItems.menuItem[0].value[0]
            }
            return newState

            case 'START_GET_DETAIL_REQUEST':
                var newState = {...state}

                var vehicle = {}
                if (state.vehicles[action.selector]) {
                    vehicle = state.vehicles[action.selector]
                }
    
                newState.vehicles[action.selector] = {
                    ...vehicle,
                    requesting_detail: true
                }

                return newState
    
            case 'ADD_DETAIL':
                var newState = {...state}

                var vehicle = {}
                if (state.vehicles[action.selector]) {
                    vehicle = state.vehicles[action.selector]
                }
    
                let watthourspermile
                let mpkwh

                if (action.payload.vehicle.fuelType[0] === "Electricity"){
                    watthourspermile = (action.payload.vehicle.combE[0] * 1000 / 100) //kwh to watt hours, divided by 100 miles
                    mpkwh = 1000 / watthourspermile
                        newState.vehicles[action.selector] = {
                            ...vehicle,
                                vehicle_detail_requested: true,
                                vehicle_emissions: mpkwh,
                                vehicle_fuel_type: action.payload.vehicle.fuelType[0],
                                requesting_detail: false
                        }
                     } else {
                            newState.vehicles[action.selector] = {
                                ...vehicle,
                                    vehicle_detail_requested: true,
                                    vehicle_emissions: action.payload.vehicle.co2TailpipeGpm[0],
                                    vehicle_fuel_type: action.payload.vehicle.fuelType[0],
                                    requesting_detail: false
                            }

                        }

                return newState

                case 'START_LOADING_BACKEND_COMMENTS':
                    var newState = {...state}
    
                    var vehicle = {}
                    if (state.vehicles[action.selector]) {
                        vehicle = state.vehicles[action.selector]
                    }
        
                    newState.vehicles[action.selector] = {
                        ...vehicle,
                        loading_comments: true
                    }
                    return newState

                case 'LOADING_BACKEND_COMMENTS':
                    // debugger
                    var newState = {...state}
    
                    var vehicle = {}
                    if (state.vehicles[action.selector]) {
                        vehicle = state.vehicles[action.selector]
                    }
        
                    newState.vehicles[action.selector] = {
                        ...vehicle,
                        comments: action.comments,
                        loading_comments: false
                    }
                    return newState
                    // return state

                case 'ADD_COMMENT':
                    // debugger
                    var newState = {...state}
    
                    var vehicle = {}
                    if (state.vehicles[action.selector]) {
                        vehicle = state.vehicles[action.selector]
                    }
        
                    newState.vehicles[action.selector] = {
                        ...vehicle,
                        comments: [
                            ...vehicle.comments,
                            {comment: action.comment.comment}
                        ]
                    }
                    return newState

        default:
            return state;
    }
}