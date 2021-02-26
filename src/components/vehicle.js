import React, { PureComponent } from 'react';

class Vehicle extends PureComponent {

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