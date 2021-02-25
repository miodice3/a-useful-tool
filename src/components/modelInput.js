import React, { Component } from 'react';

class ModelInput extends Component {

    renderForm = () =>{
        return this.props.models.map((model, index)=><option key={index} value={model}>{model}</option>)
    }

    handleChange = (event) =>{
        event.preventDefault()
        // debugger
        this.props.getVehicleAPI(event.target.value)
    }

    render(){
        return(
            <div onChange={this.handleChange}>
                <select>
                <option value="null">Select Model</option>
                {this.renderForm()}
                </select>
            </div>
        )
    }
}

export default ModelInput