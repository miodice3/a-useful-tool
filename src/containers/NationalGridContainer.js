import React, { Component } from 'react';
import { nationalGridAPI } from '../actions/getNationalGridAPI';
// import ScheduleContainer from '../containers/scheduleContainer';
// import VehicleSelectionContainer from './vehicleSelectionContainer'
import ApexChart from '../components/graphAPI'

import { connect } from 'react-redux';

class NationalGridContainer extends Component {

    componentDidMount(){
        this.props.setAddForecastWithinDispatch()
    }

    render(){
        return(
            <div>
                {/* <ScheduleContainer /> */}
                <ApexChart 
                    forecasts={this.props.forecasts} vehicle_a_emissions={this.props.vehicle_a_emissions} vehicle_a_fuel_type={this.props.vehicle_a_fuel_type} mpkwh={4} mpkwhfreeze={2.7}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    forecasts: state.forecasts,
    vehicle_a_emissions: state.vehicle_a_emissions,
    vehicle_a_fuel_type: state.vehicle_a_fuel_type,
    state: state
})

function mapDispatchToProps(dispatch){
    return {
        setAddForecastWithinDispatch: () => dispatch(nationalGridAPI())
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(NationalGridContainer)
