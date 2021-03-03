import React, { PureComponent } from 'react';

class ModelInput extends PureComponent {

    renderForm = () =>{
        return this.props.models.map((model, index)=><option key={index} value={model}>{model}</option>)
    }

    componentDidUpdate(){
            if (this.props.selectedModel){
                this.props.getVehicleAPI(this.props.selectedYear, this.props.selectedManufacturer, this.props.selectedModel, this.props.selector)
            }
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