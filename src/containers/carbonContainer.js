import React, { Component } from 'react';
import TimeZoneSelection from '../components/timeZone';
import CarbonFetch from '../components/carbonFetch';
import ScheduleContainer from '../containers/scheduleContainer';

import { connect } from 'react-redux';

class CarbonContainer extends Component {

    componentDidMount(){
        fetch('https://api.carbonintensity.org.uk/intensity/2021-02-23T21:15Z/fw48h')
        .then(response=>response.json())
        .then(json=> this.props.addForecast(json.data))
      }

    render(){
        return(
            <div>
                <br />
                CarbonContainer Component <br />
                <TimeZoneSelection />
                <br />
                <CarbonFetch /><br />
                <ScheduleContainer />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addForecast: object => dispatch({ type: "ADD_FORECAST", object})
  })

export default connect(null, mapDispatchToProps)(CarbonContainer)