import React, { PureComponent } from 'react';

import PEVInput from '../components/PEVInput'

import createPEVSelf from '../actions/createPEVSelf'
import updatePEVStat from '../actions/updatePEVStat'

import { connect } from 'react-redux';

class PEVSelectionContainer extends PureComponent {


    // create on content loaded lifecycle function to check if selector component exists, if it does not, create itself
    // completing both selector A & B in state will trigger graph to render

    componentDidMount(){
        this.props.createPEVSelf(this.props.selector)
    }

    updatePEVStats = (batterySize, milesRange) => {
        this.props.updatePEVStat(this.props.selector, batterySize, milesRange)
    }

    render(){
        return(
            <div>
                <PEVInput updatePEVStats={this.updatePEVStats}/>
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
        createPEVSelf: (selector) => dispatch(createPEVSelf(selector)),
        updatePEVStat: (selector, batterySize, milesRange) => dispatch(updatePEVStat(selector, batterySize, milesRange))
    }  
}

export default connect(null, mapDispatchToProps)(PEVSelectionContainer)