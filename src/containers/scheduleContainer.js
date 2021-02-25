import React, { Component } from 'react';
// import Schedule from '../components/schedule'
import ApexChart from '../components/graphAPI'
// import ApexChart from '../components/graphsample'



import { connect } from 'react-redux';

class ScheduleContainer extends Component {

    render(){
        return(
            <div>
                <br />
                ScheduleContainer Component <br />
                <br />
                <ApexChart forecasts={this.props.forecasts} gasreg={25} gasfreeze={21} mpkwh={4} mpkwhfreeze={2.7}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    forecasts: state.forecasts
})

export default connect(mapStateToProps)(ScheduleContainer)