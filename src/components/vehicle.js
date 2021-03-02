import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Vehicle extends PureComponent {

    componentDidMount = () => {
        // if (this.props.selector === "A"){
        //         this.props.history.push(`/vehicles/${this.props.fedID_number}`)
        //     }
        
        // if (this.props.selector === "B"){
        //     this.props.history.push(`/vehicles/${this.props.state.vehicles.A.fedID_number}/${this.props.fedID_number}`)
        // }
        this.props.getVehcileDetailsAPI()
    }

    render(){
        return(
            <div>
                Federal ID: {this.props.fedID_number}
            </div>
        )
    }
}

const mapStateToProps = (state, existingProps) => ({
    ...existingProps,
    state: state,
    fedID_number: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].fedID_number : null
})


export default withRouter(connect(mapStateToProps)(Vehicle))