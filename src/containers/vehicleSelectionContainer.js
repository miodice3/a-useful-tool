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
import setSelectedManufacturer from '../actions/setSelectedManufacturer'
import setSelectedModel from '../actions/setSelectedModel'

import { connect } from 'react-redux';

class VehicleSelectionContainer extends PureComponent {

    state = {}

    componentDidMount(){
        this.props.getYearAPI(this.props.selector)
    }

    renderYear = () => {
        // debugger
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
        this.props.getManufacturerAPI(event, this.props.selector)
    }

    renderManufacturers = () =>{
        if (this.props.should_display_manufacturers){
            return <ManufacturerInput 
                getModelAPI={this.getModelAPI} 
                manufacturers={this.props.manufacturers}
                selectedManufacturer={this.props.selectedManufacturer}
                selector={this.props.selector}
                setSelectedManufacturer={this.props.setSelectedManufacturer}
                selectedYear={this.props.selectedYear}
                />
            } else {
                return
            }
        }
    
    getModelAPI = (event)=> {
        this.props.getModelAPI(event, this.props.selectedManufacturer, this.props.selector)
    }

    renderModels = () =>{
        if (this.props.should_display_models){
            return <ModelInput 
                getVehicleAPI={this.getVehicleAPI} 
                models={this.props.models}
                selectedModel={this.props.selectedModel}
                setSelectedModel={this.props.setSelectedModel}
                selector={this.props.selector}
                />
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
    years: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].years : [],
    requesting_year: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].loading : true,
    selectedYear: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].selectedYear : null,

    manufacturers: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].manufacturers : [],
    loading_manufacturers: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].loading_manufacturers : false,
    should_display_manufacturers: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].should_display_manufacturers : false,
    selectedManufacturer: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].selectedManufacturer : null,

    // models: state.models,
    models: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].models : [],
    requesting_model: state.requesting_model,
    should_display_models: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].should_display_models : false,
    selectedModel: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].selectedModel : null,

    vehicle_a_detail_requested: state.vehicle_a_detail_requested,
    vehicle: state.vehicle,
    requesting_vehicle: state.requesting_vehicle
})
// test manual state has to match one of the returned states from year, mfg etc...
function mapDispatchToProps(dispatch){
    return {
        getYearAPI: (selector) => dispatch(getYearAPI(selector)),
        setSelectedYear: (selectedYear, selector) => dispatch(setSelectedYear(selectedYear, selector)),
        
        getManufacturerAPI: (selected, selector) => dispatch(getManufacturerAPI(selected, selector)),
        setSelectedManufacturer: (selectedManufacturer, selector) => dispatch(setSelectedManufacturer(selectedManufacturer, selector)),
        
        getModelAPI: (year, manufacture, selector) => dispatch(getModelAPI(year, manufacture, selector)),
        setSelectedModel: (selectedModel, selector) => dispatch(setSelectedModel(selectedModel, selector)),

        getVehicleAPI: (year, manufacture, model, selector) => dispatch(getVehicleAPI(year, manufacture, model, selector)),
        getVehicleDetailsAPI: (selected, selector) => dispatch(getVehicleDetailsAPI(selected, selector))
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSelectionContainer)