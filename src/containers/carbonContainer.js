import React, { Component } from 'react';
// import TimeZoneSelection from '../components/timeZone';
// import CarbonFetch from '../components/carbonFetch';
import { nationalGridAPI } from '../API/nationalGrid';
import ScheduleContainer from '../containers/scheduleContainer';

import { connect } from 'react-redux';

class CarbonContainer extends Component {

    componentDidMount(){
        this.props.setAddForecastWithinDispatch()
        // console.log("this is props: ", this.props)
    }

    render(){
        return(
            <div>
                <br />
                CarbonContainer Component <br />
                {/* <TimeZoneSelection /> */}
                <br />
                <ScheduleContainer />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        setAddForecastWithinDispatch: () => dispatch(nationalGridAPI())
    }  
}

export default connect(null, mapDispatchToProps)(CarbonContainer)
// export default connect(null)(CarbonContainer)
