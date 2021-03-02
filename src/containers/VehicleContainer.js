import React, { PureComponent } from 'react';
import { nationalGridAPI } from '../actions/getNationalGridAPI';
import VehicleSelectionContainer from './vehicleSelectionContainer'
import ApexChart from '../components/graphVehicles'
import getVehicleDetailsAPI from '../actions/getVehicleDetailsAPI'

import { connect } from 'react-redux';

class VehicleContainer extends PureComponent {

    componentDidMount(){
        this.props.setAddForecastWithinDispatch()
        // let a = document.location.pathname.split('/')[2]
        // let b = document.location.pathname.split('/')[3]
        // if (a){
        //     this.props.getVehicleDetailsAPI(a, "A")
        // }
        // if (b){
        //     this.props.getVehicleDetailsAPI(b, "B")
        // }
    }

    renderGraph = ()=>{
        if (this.props.vehicle_a && this.props.vehicle_b){
            return <ApexChart
                    forecasts={this.props.forecasts}
                    vehicle_a={this.props.vehicle_a}
                    vehicle_b={this.props.vehicle_b}
                />
        }
    }

    render(){
        return(
            <div>
                <VehicleSelectionContainer selector="A" />
                <VehicleSelectionContainer selector="B" />
                {this.renderGraph()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    forecasts: state.forecasts,
    vehicle_a: state.vehicles.A ? state.vehicles.A : null,
    vehicle_b: state.vehicles.B ? state.vehicles.B : null
})

function mapDispatchToProps(dispatch){
    return {
        setAddForecastWithinDispatch: () => dispatch(nationalGridAPI()),
        getVehicleDetailsAPI: (selected, selector) => dispatch(getVehicleDetailsAPI(selected, selector))
    }  
}

export default connect(mapStateToProps,mapDispatchToProps)(VehicleContainer)