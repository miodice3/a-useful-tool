import React, { Component } from 'react';
// import Schedule from '../components/schedule'
import ApexChart from '../components/graph'


import { connect } from 'react-redux';

class ScheduleContainer extends Component {

    render(){
        return(
            <div>
                <br />
                ScheduleContainer Component <br />
                <br />
                <ApexChart forecasts={this.props.forecasts}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    forecasts: state.forecasts
})

export default connect(mapStateToProps)(ScheduleContainer)