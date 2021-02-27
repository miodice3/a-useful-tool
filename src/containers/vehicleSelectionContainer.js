import React, { PureComponent } from 'react';
import YearInput from '../components/yearInput'
import getYearAPI from '../actions/getYearAPI'

import ManufacturerInput from '../components/manufacturerInput'
import getManufacturerAPI from '../actions/getManufacturerAPI'

import ModelInput from '../components/modelInput'
import getModelAPI from '../actions/getModelAPI'

import getVehicleAPI from '../actions/getVehicleAPI'

import Vehicle from '../components/vehicle'

import getVehicleDetailsAPI from '../actions/getVehicleDetailsAPI'
import setSelectedYear from '../actions/setSelectedYear'


import { connect } from 'react-redux';

class VehicleSelectionContainer extends PureComponent {

    state = {}

    componentDidMount(){
        this.props.getYearAPI(this.props.selector)
    }

    renderYear = () => {
        if (!this.props.requesting_year){
            return <YearInput
                setSelectedYear={this.props.setSelectedYear}
                getManufacturerAPI={this.getManufacturerAPI}
                years={this.props.years}
                selector={this.props.selector}
                selectedYear={this.props.selectedYear}/>
        } else {
            return "loading years"
        }
    }

    getManufacturerAPI = (event)=> {
        this.setState({
            selected_year: event
        })
        this.props.getManufacturerAPI(event)
    }

    renderManufacturers = () =>{
        if (this.props.requesting_manufacturer === false){
            return <ManufacturerInput getModelAPI={this.getModelAPI} manufacturers={this.props.manufacturers}/>
            }
        }
    
    getModelAPI = (event)=> {
        this.setState({
            selected_mfg: event
        })
        this.props.getModelAPI(this.state.selected_year, event)
    }

    renderModels = () =>{
        if (this.props.requesting_model === false){
            return <ModelInput getVehicleAPI={this.getVehicleAPI} models={this.props.models}/>
            }
        }

    getVehicleAPI = (event)=> {
        this.setState({
            selected_vehicle: event
        })
        this.props.getVehicleAPI(this.state.selected_year, this.state.selected_mfg, event, this.props.selector)
    }

    renderVehicle = () =>{
        if (this.props.requesting_vehicle === false){
            return <Vehicle getVehcileDetailsAPI={this.getVehcileDetailsAPI} vehicle={this.props.vehicle}/>
            }
        }

    getVehcileDetailsAPI = ()=>{
        this.setState({
            vehicle_selected_id: this.props.vehicle
        })
        this.props.getVehicleDetailsAPI(this.props.vehicle, this.props.selector)
    }

    render(){
        return(
            <div>
                {this.renderYear()}
                {this.renderManufacturers()}
                {this.renderModels()}
                {this.renderVehicle()}
            </div>
        )
    }
}

const mapStateToProps = (state, existingProps) => ({
    ...existingProps,
    requesting_year: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].loading : true,
    years: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].years : [],

    selectedYear: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].selectedYear : null,
    manufacturers: state.manufacturers,
    requesting_manufacturer: state.requesting_manufacturer,

    models: state.models,
    requesting_model: state.requesting_model,

    vehicle_a_detail_requested: state.vehicle_a_detail_requested,
    vehicle: state.vehicle,
    requesting_vehicle: state.requesting_vehicle
})

function mapDispatchToProps(dispatch){
    return {
        getYearAPI: (selector) => dispatch(getYearAPI(selector)),
        setSelectedYear: (selectedYear, selector) => dispatch(setSelectedYear(selectedYear, selector)),
        getManufacturerAPI: (selected) => dispatch(getManufacturerAPI(selected)),
        getModelAPI: (year, manufacture) => dispatch(getModelAPI(year, manufacture)),
        getVehicleAPI: (year, manufacture, model, selector) => dispatch(getVehicleAPI(year, manufacture, model, selector)),
        getVehicleDetailsAPI: (selected, selector) => dispatch(getVehicleDetailsAPI(selected, selector))
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSelectionContainer)