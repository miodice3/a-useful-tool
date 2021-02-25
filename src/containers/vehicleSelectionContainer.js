import React, { Component } from 'react';
import YearInput from '../components/yearInput'
import getYearAPI from '../actions/getYearAPI'

import ManufacturerInput from '../components/manufacturerInput'
import getManufacturerAPI from '../actions/getManufacturerAPI'

import { connect } from 'react-redux';

class VehicleSelectionContainer extends Component {

    componentDidMount(){
        this.props.getYearAPI()
    }

    getManufacturerAPI = (event)=> {
        console.log("year was submitted", event)
        this.props.getManufacturerAPI(event)
    }

    renderYear = () => {
        if (this.props.requesting_year === false){
        return <YearInput getManufacturerAPI={this.getManufacturerAPI} years={this.props.years}/>
            } else {
                return "loading years"
            }
    }

    renderManufacturers = () =>{
        if (this.props.requesting_manufacturer === false){
            return <ManufacturerInput manufacturers={this.props.manufacturers}/>
        }
        // } else {
        //     return "loading manufacturers"
        // }
        }

    render(){
        return(
            <div>
                {this.renderYear()}
                {this.renderManufacturers()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    years: state.years,
    requesting_year: state.requesting_year,

    manufacturers: state.manufacturers,
    requesting_manufacturer: state.requesting_manufacturer
})

function mapDispatchToProps(dispatch){
    return {
        getYearAPI: () => dispatch(getYearAPI()),
        getManufacturerAPI: (selected) => dispatch(getManufacturerAPI(selected))
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSelectionContainer)