import React, { Component } from 'react';
import Schedule from '../components/schedule'

import { connect } from 'react-redux';

class ScheduleContainer extends Component {

    render(){
        return(
            <div>
                <br />
                ScheduleContainer Component <br />
                <br />
            
                {this.props.forecasts ? this.props.forecasts.map((forecast, index) => <Schedule key={index} forecast={forecast}/>) : "fetching data"}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    forecasts: state.forecasts
})

export default connect(mapStateToProps)(ScheduleContainer)