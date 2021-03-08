import React, { Component } from 'react';
import { nationalGridAPI } from '../actions/getNationalGridAPI';
import ApexChart from '../components/graphNationalGrid'

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
                        <p class="card-text">Britains National Power Grid API provides data for the trailing and leading 24 hour periods. The amount of CO2 per kWh of electricity fluctuates through the day. This variation is caused in part by power plants being brought online during high demand periods and having to ramp up quickly, which is relatively inneficient.  It is also reduced at other times by the contributions of renewable energy being generated, allowing fossil fueled plants to be scaled back. As a consumer, this information can be used to lower your carbon footprint, by shifting non-time sensitive electrical loads to periods where cleaner electricity is available.  For instance, running electric clothes dryers or charging electric vehicles usually overnight can drastically reduce your overall carbon footprint.</p>
                        <p>In 2020, Britain set a record running without coal fired power for over 67 days, the longest period since the country had started to produce electricty since the industrial revolution.  As power providers continue shifting to cheaper, non-fossil fuel sources, the carbon coefficients will continue to drop. In the meantime being concious of when large, discretionary electrical loads are connected can make a large impact.</p>
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





