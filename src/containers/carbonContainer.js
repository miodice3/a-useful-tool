import React, { Component } from 'react';
import TimeZoneSelection from '../components/timeZone';
import CarbonFetch from '../components/carbonFetch';
import ScheduleContainer from '../containers/scheduleContainer';

class CarbonContainer extends Component {
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

export default CarbonContainer