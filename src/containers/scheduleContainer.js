import React, { Component } from 'react';
// import Schedule from '../components/schedule'
import ApexChart from '../components/graphAPI'
// import ApexChart from '../components/graphsample'



import { connect } from 'react-redux';

class ScheduleContainer extends Component {

    render(){
        return(
            <div>
                <br />
                ScheduleContainer Component <br />
                <br />
                <ApexChart forecasts={this.props.forecasts} vehicle_a_emissions={this.props.vehicle_a_emissions} vehicle_a_fuel_type={this.props.vehicle_a_fuel_type} mpkwh={4} mpkwhfreeze={2.7}/>
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

export default connect(mapStateToProps)(ScheduleContainer)