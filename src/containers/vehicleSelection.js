import React, { Component } from 'react';
import YearInput from '../components/yearInput'

// import { connect } from 'react-redux';

class VehicleSelectionContainer extends Component {

    componentDidMount(){

        // console.log("this is vehicle selection container")
    }

    render(){
        return(
            <div>
                vehicle selection container
                <YearInput />

            </div>
        )
    }
}

export default VehicleSelectionContainer