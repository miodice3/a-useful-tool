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
            {/* <br><br> */}
                <h1 class="my-4">Welcome to Modern Business</h1>
                <div class="row">
                <div class="col-lg-4 mb-4">
                    <div class="card h-100">
                    <h4 class="card-header">Realtime Electrical Grid Polution - UK</h4>
                    <div class="card-body">
                            <ApexChart
                            forecasts={this.props.forecasts}
                            vehicle_a_emissions={this.props.vehicle_a_emissions}
                            vehicle_a_fuel_type={this.props.vehicle_a_fuel_type}
                        />
                        <p class="card-text">We utlize Britains National Power Grid to request the trailing and leading 24 hour periods and returns real historical data and forecasts for every 15 minutes.  This raw data is unaltered, only manipulating it to display on a graph.  The amount of CO2 fluctuates through the day, as renewables help at certain times and power plants are brought online at certain times of the day to help meet consumer demand.  Depending on when you consume electricty, the amount of emissions can vary drastically.  Shifting large chunks of consumption (running dryers, charging an EV) can drastically reduce your overall carbon footprint.</p> <p>In 2020, Britain set a record for itself by running without coal fired power for over 67 days, the longest period since the country had started to produce electricty from coal in the industrial revolution.  As power providers switch to cheaper, non-fossil fuel sources, the carbon coefficients will continue to drop, in the meantime being concious of when we charge electric cars or optionally use electricity can make a large impact.</p>
                        
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Learn More</a>
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





