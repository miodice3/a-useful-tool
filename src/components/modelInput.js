import React, { Component } from 'react';

class ModelInput extends Component {

    renderForm = () =>{
        // debugger
        return this.props.models.map((model, index)=><option key={index} value={model}>{model}</option>)
    }

    handleChange = (event) =>{
        event.preventDefault()
        debugger
        // console.log("this model was selected: ", event.target.value)
        this.props.getModelAPI(event.target.value)
    }

    render(){
        // debugger
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