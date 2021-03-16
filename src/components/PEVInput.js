import React, { PureComponent } from 'react';

class PEVInput extends PureComponent {

    state = {}
    // need to put validations for numbers only.
    batterySize = (event) =>{
        this.setState({
            batterySize: event.target.value
        })
    }

    milesRange = (event) =>{
        this.setState({
            milesRange: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        if (this.state.batterySize && this.state.milesRange){
            this.props.updatePEVStats(this.state.batterySize, this.state.milesRange)
        }
    }

    render(){
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                <label>
                    Input useable battery size in watt-hours<br/>
                    (typ: max voltage * amperage * .8)
                </label><br/>
                <input type="text"
                pattern="[0-9]*"
                onChange={this.batterySize}
                value={this.state.batterySize}
                placeholder="1325"
                /><br/>

                <label>
                    Miles of Range
                </label><br/>
                <input type="text"
                pattern="[0-9]*"
                onChange={this.milesRange}
                value={this.state.milesRange}
                placeholder="30"
                /><br/>
                <button type="submit">Submit Data</button>
            </form>

        )
    }
}

export default PEVInput