import React, { PureComponent } from 'react';
import { nationalGridAPI } from '../actions/getNationalGridAPI';
import VehicleSelectionContainer from './vehicleSelectionContainer'
import ApexChart from '../components/graphVehicles'

import { connect } from 'react-redux';

class VehicleContainer extends PureComponent {

    componentDidMount() {
        this.props.setAddForecastWithinDispatch()
    }

    renderGraph = () => {
        if (this.props.vehicle_a && this.props.vehicle_b) {
            return <ApexChart
                forecasts={this.props.forecasts}
                vehicle_a={this.props.vehicle_a}
                vehicle_b={this.props.vehicle_b}
            />
        }
    }

    render() {
        return (


            <div class="container">

                <h1 class="my-4">Please select any two vehicles</h1>

                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="card h-100">
                            <h4 class="card-header">Vehicle A</h4>
                            <div class="card-body">
                            <VehicleSelectionContainer selector="A" />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 mb-4">
                        <div class="card h-100">
                            <h4 class="card-header">Vehicle B</h4>
                            <div class="card-body">
                            <VehicleSelectionContainer selector="B" />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 mb-4">
                        <div class="card h-100">
                            <h4 class="card-header">Comparative Analysis</h4>
                            <div class="card-body">
                                {this.renderGraph()}
                                <p class="card-text">Traditional fuel cars have data reported directly from the EPA.  Electric powered vehicles need a conversion, from the provided kWh/100 miles, and are combined with UK's realtime grid data.  Therefore, electric vehicles will attributable emissions will be graphed according to the carbon intensity at that moment in time. Fossil fuels, have a consistent amount of co2 per gallon, and therefore will show steady emissions.</p>
                                <p>Emissions data are gathered while the vehicle is brand new. All vehicles decline over time.  Tampering with, removing emissions controls, tuning, or other vehicle modifications like raising suspension heights, larger tires, bicycle racks, additional weight left in the vehicles, will impact emissions profiles.  Data reported are for new, stock configurations only.</p>
                            </div>
                            <div class="card-footer">
                                <a href="https://www.fueleconomy.gov/" target="_blank" class="btn btn-primary">Find Primary Source Data Here</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 mb-4">
                        <div class="card h-100">
                            <h4 class="card-header">Join the Discussion!</h4>
                            <div class="card-body">
                                <p class="card-text">Have something to say about a particular vehicle?  Please select the vehicle and post your comment.</p>
                                <VehicleSelectionContainer selector="Comment" />
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-primary">Submit Comment!</a>
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
    vehicle_a: state.vehicles.A ? state.vehicles.A : null,
    vehicle_b: state.vehicles.B ? state.vehicles.B : null
})

function mapDispatchToProps(dispatch) {
    return {
        setAddForecastWithinDispatch: () => dispatch(nationalGridAPI())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleContainer)