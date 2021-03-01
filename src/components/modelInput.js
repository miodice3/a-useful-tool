import React, { Component } from 'react';

class ModelInput extends Component {

    renderForm = () =>{
        return this.props.models.map((model, index)=><option key={index} value={model}>{model}</option>)
    }

    componentDidUpdate(){
        // debugger
    }


    handleChange = (event) =>{
        this.props.setSelectedModel(event.target.value, this.props.selector)
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