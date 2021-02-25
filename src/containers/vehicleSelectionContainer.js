import React, { Component } from 'react';
import YearInput from '../components/yearInput'
import getYearAPI from '../actions/getYearAPI'

import { connect } from 'react-redux';

class VehicleSelectionContainer extends Component {

    componentDidMount(){
        this.props.getYearAPI()
    }

    getManufacturerAPI = (event)=> {
        console.log("year was submitted", event)
    }

    renderYear = () => {
        if (this.props.requesting_year === false){
        return <YearInput getManufacturerAPI ={this.getManufacturerAPI} years={this.props.years}/>
    } else {
        return "loading data"
    }
    }

    render(){
        // debugger
        return(
            <div>
                vehicle selection container
                {/* <YearInput years={this.props.years}/> */}
                {this.renderYear()}
                {/* <ManufactureInput /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    years: state.years,
    requesting_year: state.requesting_year
})

function mapDispatchToProps(dispatch){
    return {
        getYearAPI: () => dispatch(getYearAPI())
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSelectionContainer)