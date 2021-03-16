import React, { PureComponent } from 'react';
import { nationalGridAPI } from '../actions/getNationalGridAPI';
import VehicleSelectionContainer from './vehicleSelectionContainer'
import PEVSelectionContainer from './PEVSelectionContainer'

import ApexChartGPM from '../components/graphVehicles'
import ApexChartLTV from '../components/graphVehiclesLTV'

import { connect } from 'react-redux';

class PEVContainer extends PureComponent {

    componentDidMount() {
        this.props.setAddForecastWithinDispatch()
    }

    renderGraphGPM = () => {
        if (this.props.vehicle_a && this.props.vehicle_b) {
            return <ApexChartGPM
                forecasts={this.props.forecasts}
                vehicle_a={this.props.vehicle_a}
                vehicle_b={this.props.vehicle_b}
            />
        }
    }

    renderLifetimeGraph = () => {
        if (this.props.vehicle_a && this.props.vehicle_b) {
            return <ApexChartLTV
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
                            <h4 class="card-header">PEV Inputs</h4>
                            <div class="card-body">
                            <PEVSelectionContainer selector="B" />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 mb-4">
                        <div class="card h-100">
                            <h4 class="card-header">Comparative Analysis</h4>
                            <div class="card-body">
                                {this.renderGraphGPM()}
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

                    <div class="col-lg-12 mb-4">
                        <div class="card h-100">
                            <h4 class="card-header">Estimated lifetime differential @ 150,000 Miles</h4>
                            <div class="card-body">
                                {this.renderLifetimeGraph()}
                                <p class="card-text">For traditional fuel cars, the EPA's tailpipe emissions measured in gram/CO2 per mile is used in a linear equation with 150,000 miles and the result is graphed.</p>
                                <p>For Electric vehicles, the average value of the UK's pollution level for the current 48 hour period is applied to the combined efficiency rating of the EV.  The resulting pollution, converted to gram/CO2 per mile, is then used in the same linear equation with 150,000 miles.</p>
                                <p>The rating for electric vehicles will vary as the average pollution intensity changes day to day, but this can be used to give a general idea of the differences over a period of time.  Many electrical suppliers are well underway with transition plans to integrate less carbon intensive electricity to the grid.  Therefore, using todays estimates for the next 8 years or 150,000 mile estimates, could result in higher than actual projections.</p>
                            </div>
                            {/* <div class="card-footer">
                                <a href="https://www.fueleconomy.gov/" target="_blank" class="btn btn-primary">Find Primary Source Data Here</a>
                            </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(PEVContainer)