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
                                <p class="card-text">
                                Traditional fuel cars display data taken directly from the EPA.  Pure electric vehicles data are given in kW h/100 miles, and require a conversion to grams CO2 per mile.*</p>
                                <p>This conversion is computed using the forecasted grams CO2 per kW h from the UK's grid.  Therefore, EV's efficiencies vary depending on how clean the power is when the car is charged. This gives a good visual to show the range of pollution, and how emissions can be minimized for electric vehicles depending on the time of the day they are charged.</p>
                                <p>Fossil fuels have a consistent amount of CO2 per gallon, and therefore will show steady emissions.</p>
                                <p>Emissions data is gathered while the vehicle is brand new.  Tampering with, removing emissions controls, raising suspension heights, larger tires, racks, or additional weight left in the vehicles, will impact emissions.  Data reported are for new, factory configurations only.</p>
                                <p>*PHEVs report combined data, and it is not immediately clear how these numbers are to be used.  Due to this, PHEV's emissions data displayed in the chart are likely incomplete, and will vary dependent on vehicle driving modes.</p>
                            </div>
                            <div class="card-footer">
                                <a href="https://www.fueleconomy.gov/" target="_blank" class="btn btn-primary">Find Primary Source Data Here</a>
                            </div>
                        </div>
                    </div>

                    {/* <div class="col-lg-12 mb-4">
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
                    </div> */}






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