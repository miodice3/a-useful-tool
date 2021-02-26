
export default function reducer(state={ vehicle_a: {}, vehicle_b: {}}, action){
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
                if (action.payload.vehicle.fuelType[0] === "Electricity"){
                    watthourspermile = (action.payload.vehicle.combE[0] * 1000 / 100) //kwh to watt hours, divided by 100 miles
                    mpkwh = 1000 / watthourspermile

                    return {
                        ...state,
                        vehicle_a: {
                                vehicle_a_detail_requested: true,
                                mfg: action.payload.vehicle.make[0],
                                model: action.payload.vehicle.model[0],
                                year: action.payload.vehicle.year[0],
                                vehicle_a_emissions: mpkwh,
                                vehicle_a_fuel_type: action.payload.vehicle.fuelType[0],
                                requesting_detail: false
                            }
                        }

                } else {
                        return {
                            ...state,
                            vehicle_a: {
                                vehicle_a_detail_requested: true,
                                mfg: action.payload.vehicle.make[0],
                                model: action.payload.vehicle.model[0],
                                year: action.payload.vehicle.year[0],
                                vehicle_a_emissions: action.payload.vehicle.co2TailpipeGpm[0],
                                vehicle_a_fuel_type: action.payload.vehicle.fuelType[0],
                                requesting_detail: false
                            }
                        }
            }

            case 'START_GET_B_DETAIL_REQUEST':
                return {
                    ...state,
                    requesting_detail: true
                } 
    
            case 'ADD_B_DETAIL':
                let watthourspermile_b
                let mpkwh_b
                if (action.payload.vehicle.fuelType[0] === "Electricity"){
                    watthourspermile_b = (action.payload.vehicle.combE[0] * 1000 / 100) //kwh to watt hours, divided by 100 miles
                    mpkwh_b = 1000 / watthourspermile_b

                    return {
                        ...state,
                        vehicle_b: {
                                vehicle_b_detail_requested: true,
                                mfg: action.payload.vehicle.make[0],
                                model: action.payload.vehicle.model[0],
                                year: action.payload.vehicle.year[0],
                                vehicle_b_emissions: mpkwh_b,
                                vehicle_b_fuel_type: action.payload.vehicle.fuelType[0],
                                requesting_detail: false
                            }
                        }

                } else {
                        return {
                            ...state,
                            vehicle_b: {
                                vehicle_b_detail_requested: true,
                                mfg: action.payload.vehicle.make[0],
                                model: action.payload.vehicle.model[0],
                                year: action.payload.vehicle.year[0],
                                vehicle_b_emissions: action.payload.vehicle.co2TailpipeGpm[0],
                                vehicle_b_fuel_type: action.payload.vehicle.fuelType[0],
                                requesting_detail: false
                            }
                        }
            }

        default:
            return state;
    }
}