import React, { Component } from 'react';
import { nationalGridAPI } from '../actions/apiCalls';
import ScheduleContainer from '../containers/scheduleContainer';
import VehicleSelectionContainer from './vehicleSelectionContainer'

import { connect } from 'react-redux';

class CarbonContainer extends Component {

    componentDidMount(){
        this.props.setAddForecastWithinDispatch()
    }

    render(){
        return(
            <div>
                <br />
                CarbonContainer Component <br />
                <VehicleSelectionContainer />
                <br />
                <ScheduleContainer />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        setAddForecastWithinDispatch: () => dispatch(nationalGridAPI())
    }  
}

export default connect(null, mapDispatchToProps)(CarbonContainer)
