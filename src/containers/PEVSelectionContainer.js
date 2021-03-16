import React, { PureComponent } from 'react';

import PEVInput from '../components/PEVInput'

import createPEVSelf from '../actions/createPEVSelf'
import updatePEVStat from '../actions/updatePEVStat'

import { connect } from 'react-redux';

class PEVSelectionContainer extends PureComponent {

    componentDidMount(){
        this.props.createPEVSelf(this.props.selector)
    }

    updatePEVStats = (batterySize, milesRange) => {
        this.props.updatePEVStat(this.props.selector, batterySize, milesRange)
    }

    render(){
        return(
            <div>
                <PEVInput updatePEVStats={this.updatePEVStats}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        createPEVSelf: (selector) => dispatch(createPEVSelf(selector)),
        updatePEVStat: (selector, batterySize, milesRange) => dispatch(updatePEVStat(selector, batterySize, milesRange))
    }  
}

export default connect(null, mapDispatchToProps)(PEVSelectionContainer)