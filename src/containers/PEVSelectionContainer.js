import React, { PureComponent } from 'react';

import setSelectedModel from '../actions/setSelectedModel'

import { connect } from 'react-redux';

class PEVSelectionContainer extends PureComponent {

    render(){
        return(
            <div>
                sample text
            </div>
        )
    }
}

const mapStateToProps = (state, existingProps) => ({
    // ...existingProps,
    // years: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].years : [],
    // requesting_year: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].loading : true,
    // selectedYear: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].selectedYear : null,

    // manufacturers: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].manufacturers : [],
    // loading_manufacturers: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].loading_manufacturers : false,
    // should_display_manufacturers: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].should_display_manufacturers : false,
    // selectedManufacturer: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].selectedManufacturer : null,

    // models: state.models,
    // models: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].models : [],
    // requesting_model: state.requesting_model,
    // should_display_models: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].should_display_models : false,
    // selectedModel: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].selectedModel : null,

    // vehicle_a_detail_requested: state.vehicle_a_detail_requested,
    // fedID_number: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].fedID_number : null,
    // vehicle: state.vehicle,
    // requesting_vehicle: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].requesting_vehicle : null,
    // comments: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].comments : null,
    // requesting_vehicle: state.requesting_vehicle
})
// test manual state has to match one of the returned states from year, mfg etc...
function mapDispatchToProps(dispatch){
    return {
        // getYearAPI: (selector) => dispatch(getYearAPI(selector)),
        // setSelectedYear: (selectedYear, selector) => dispatch(setSelectedYear(selectedYear, selector)),
        
        // getManufacturerAPI: (selected, selector) => dispatch(getManufacturerAPI(selected, selector)),
        // setSelectedManufacturer: (selectedManufacturer, selector) => dispatch(setSelectedManufacturer(selectedManufacturer, selector)),
        
        // getModelAPI: (year, manufacture, selector) => dispatch(getModelAPI(year, manufacture, selector)),
        // setSelectedModel: (selectedModel, selector) => dispatch(setSelectedModel(selectedModel, selector)),

        // getVehicleAPI: (year, manufacture, model, selector) => dispatch(getVehicleAPI(year, manufacture, model, selector)),
        // getVehicleDetailsAPI: (selected, selector) => dispatch(getVehicleDetailsAPI(selected, selector)),
        // retrieveCommentsAPI: (fedID_number, selector, event) => dispatch(retrieveCommentsAPI(fedID_number, selector, event)),
        // createCommentAPI: (fedID_number, selector, event) => dispatch(createCommentAPI(fedID_number, selector, event))
    }  
}

export default PEVSelectionContainer
// export default connect(mapStateToProps, mapDispatchToProps)(PEVSelectionContainer)