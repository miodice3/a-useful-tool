import React, { Component } from 'react';

class Vehicle extends Component {

    componentDidMount = () => {
        this.props.getVehcileDetailsAPI()
    }

    render(){
        return(
            <div>
                Federal ID: {this.props.vehicle}
            </div>
        )
    }
}

export default Vehicle