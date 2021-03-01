
export default function reducer(state={ vehicles: {} }, action){ // todo: this should run without vehicle_a: {}, vehicle_b: {}
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
// *****************************************************************
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
                selectedYear: null
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
                selectedYear: action.payload
                // selectedYear: 1995
            }
            return newState;

// *****************************************************************

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
                selectedManufacturer: ""
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
                selectedManufacturer: action.payload
                // selectedManufacturer: "BMW"
            }
            return newState;

// *****************************************************************

        case 'START_GET_MODEL_REQUEST':
            return {
                ...state,
                requesting_model: true
            } 

        case 'ADD_MODEL':
            return {
                ...state,
                models: action.payload.menuItems.menuItem.map(model => model.text[0]),
                requesting_model: false
                }

        case 'START_GET_VEHICLE_REQUEST':
            return {
                ...state,
                vehicle_a_detail_requested: false,
                requesting_vehicle: true,
                requesting_detail: false
            } 

        case 'ADD_VEHICLE':

            return {
                ...state,
                vehicle: action.payload.menuItems.menuItem[0].value[0],
                requesting_vehicle: false,
                requesting_detail: false
                }

            case 'START_GET_DETAIL_REQUEST':
                return {
                    ...state,
                    requesting_detail: true
                } 
    
            case 'ADD_DETAIL':
                let watthourspermile
                let mpkwh

                if (action.selector === "A"){
                    console.log("WITHIN UPDATE DETAIL FOR A")
                    if (action.payload.vehicle.fuelType[0] === "Electricity"){
                        watthourspermile = (action.payload.vehicle.combE[0] * 1000 / 100) //kwh to watt hours, divided by 100 miles
                        mpkwh = 1000 / watthourspermile
                        return {
                            ...state,
                            vehicle_a: {
                                    vehicle_detail_requested: true,
                                    mfg: action.payload.vehicle.make[0],
                                    model: action.payload.vehicle.model[0],
                                    year: action.payload.vehicle.year[0],
                                    vehicle_emissions: mpkwh,
                                    vehicle_fuel_type: action.payload.vehicle.fuelType[0],
                                    requesting_detail: false
                                }
                            }
                    } else {
                        return {
                            ...state,
                            vehicle_a: {
                                vehicle_detail_requested: true,
                                mfg: action.payload.vehicle.make[0],
                                model: action.payload.vehicle.model[0],
                                year: action.payload.vehicle.year[0],
                                vehicle_emissions: action.payload.vehicle.co2TailpipeGpm[0],
                                vehicle_fuel_type: action.payload.vehicle.fuelType[0],
                                requesting_detail: false
                            }
                        }
                    }
                } else if (action.selector === "B"){
                    console.log("WITHIN UPDATE DETAIL FOR B")
                    if (action.payload.vehicle.fuelType[0] === "Electricity"){
                        watthourspermile = (action.payload.vehicle.combE[0] * 1000 / 100) //kwh to watt hours, divided by 100 miles
                        mpkwh = 1000 / watthourspermile
                        return {
                            ...state,
                            vehicle_b: {
                                    vehicle_detail_requested: true,
                                    mfg: action.payload.vehicle.make[0],
                                    model: action.payload.vehicle.model[0],
                                    year: action.payload.vehicle.year[0],
                                    vehicle_emissions: mpkwh,
                                    vehicle_fuel_type: action.payload.vehicle.fuelType[0],
                                    requesting_detail: false
                                }
                            }
                    } else {
                        return {
                            ...state,
                            vehicle_b: {
                                vehicle_detail_requested: true,
                                mfg: action.payload.vehicle.make[0],
                                model: action.payload.vehicle.model[0],
                                year: action.payload.vehicle.year[0],
                                vehicle_emissions: action.payload.vehicle.co2TailpipeGpm[0],
                                vehicle_fuel_type: action.payload.vehicle.fuelType[0],
                                requesting_detail: false
                            }
                        }
                    }
                } else {
                    return state;
                }

        default:
            return state;
    }
}