import React, { PureComponent } from 'react';

class PEVInput extends PureComponent {

    state = {}

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

    render(){
        return(
            <form>
                <label>
                    Input useable battery size in watt-hours (typ: max voltage * amperage * .8)
                </label><br/>
                <input type="text"
                onChange={this.batterySize}
                value={this.state.batterySize}
                /><br/>
                {/* {this.state.batterySize}
                {this.state.milesRange} */}

                <label>
                    Miles of Range
                </label><br/>
                <input type="text"
                onChange={this.milesRange}
                value={this.state.milesRange}
                /><br/>
            </form>

        )
    }
}

export default PEVInput