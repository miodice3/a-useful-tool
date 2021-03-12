import React, { Component } from 'react';
import { nationalGridAPI } from '../actions/getNationalGridAPI';
import ApexChart from '../components/graphNationalGrid'

import powerplant from '../images/powerplant.png';

import { connect } from 'react-redux';

class NationalGridContainer extends Component {

    componentDidMount(){
        this.props.setAddForecastWithinDispatch()
    }

    render(){
        return(
            <div class="container">
                <h1 class="my-4">United Kingdom</h1>
                <div class="row">
                <div class="col-lg-12 mb-4">
                    <div class="card h-100">
                    <h4 class="card-header">Projected vs Actual Forecasts</h4>
                    <div class="card-body">
                            <ApexChart
                            forecasts={this.props.forecasts}
                            vehicle_a_emissions={this.props.vehicle_a_emissions}
                            vehicle_a_fuel_type={this.props.vehicle_a_fuel_type}
                        />
                        <p class="card-text">Britain's National Power Grid provides emissions data for the trailing and leading 24 hour periods, which is graphed above. The data shows us the amount of CO2 per kW h fluctuates through the day, meaning there are periods of cleaner power, and dirtier power available.</p>
                        <p>This variation is caused by many factors, but it is evident that electricty consumed in the mornings and late evenings consistently has the highest pollution intensity. This information can be used to lower your carbon footprint. For instance, running electric clothes dryers or charging electric vehicles when electricity is cleanest can help reduce the amount of CO2. In areas that have time-of-use electric rates, the cleanest power typically lines up with the cheapest power also, providing savings.  The cleanest power is typically available overnight.</p>
                        <p>This graph will automatically update with the current time, so feel free to come back for a live update!</p>
                    </div>
                    <div class="card-footer">
                        <a href="https://carbonintensity.org.uk/" target="_blank" class="btn btn-primary">Find Primary Source Data Here</a>
                    </div>
                    </div>
                </div>
                </div>
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





