import React, { Component } from 'react';
import YearInput from '../components/yearInput'
import getYearAPI from '../actions/getYearAPI'

import ManufacturerInput from '../components/manufacturerInput'
import getManufacturerAPI from '../actions/getManufacturerAPI'

import ModelInput from '../components/modelInput'
import getModelAPI from '../actions/getModelAPI'

import getVehicleAPI from '../actions/getVehicleAPI'

import { connect } from 'react-redux';

class VehicleSelectionContainer extends Component {

    state = {}

    componentDidMount(){
        this.props.getYearAPI()
    }

    renderYear = () => {
        if (this.props.requesting_year === false){
        return <YearInput getManufacturerAPI={this.getManufacturerAPI} years={this.props.years}/>
            } else {
                return "loading years"
            }
    }

    getManufacturerAPI = (event)=> {
        this.setState({
            selected_year: event
        })
        console.log("year was submitted", event)
        this.props.getManufacturerAPI(event)
    }

    renderManufacturers = () =>{
        if (this.props.requesting_manufacturer === false){
            return <ManufacturerInput getModelAPI={this.getModelAPI} manufacturers={this.props.manufacturers}/>
            }
        }
    
    getModelAPI = (event)=> {
        console.log("manufacture selected!!", event)
        this.setState({
            selected_mfg: event
        })
        // console.log("within callback function, local states year is ", this.state.selected_year, "current local state mfg selected is: ", event)
        this.props.getModelAPI(this.state.selected_year, event)
    }

    renderModels = () =>{
        if (this.props.requesting_model === false){
            return <ModelInput getVehicleAPI={this.getVehicleAPI} models={this.props.models}/>
            }
        }

    getVehicleAPI = (event)=> {
        console.log("vehicle selected!!", event)
        this.setState({
            selected_vehicle: event
        })
        // console.log("within callback function, local states year is ", this.state.selected_year, "current local state mfg selected is: ", event)
        this.props.getVehicleAPI(this.state.selected_year, this.state.selected_mfg, event)
    }

    render(){
        return(
            <div>
                {this.renderYear()}
                {this.renderManufacturers()}
                {this.renderModels()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    years: state.years,
    requesting_year: state.requesting_year,

    manufacturers: state.manufacturers,
    requesting_manufacturer: state.requesting_manufacturer,

    models: state.models,
    requesting_model: state.requesting_model
})

function mapDispatchToProps(dispatch){
    return {
        getYearAPI: () => dispatch(getYearAPI()),
        getManufacturerAPI: (selected) => dispatch(getManufacturerAPI(selected)),
        getModelAPI: (year, manufacture) => dispatch(getModelAPI(year, manufacture)),
        getVehicleAPI: (year, manufacture, model) => dispatch(getVehicleAPI(year, manufacture, model)),
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSelectionContainer)