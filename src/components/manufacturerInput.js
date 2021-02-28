import React, { PureComponent } from 'react';

class ManufacturerInput extends PureComponent {

    renderForm = () =>{
        return this.props.manufacturers.map((manufacturer, index)=><option key={index} value={manufacturer[0]}>{manufacturer[0]}</option>)
    }

    componentDidUpdate(){
        if (this.props.selectedManufacturer){
            this.props.getModelAPI(this.props.selectedManufacturer)
        }
    }

    handleChange = (event) =>{
        this.props.setSelectedManufacturer(event.target.value, this.props.selector)
    }

    render(){
        return(
            <div onChange={this.handleChange}>
                <select>
                {this.renderForm()}
                </select>
            </div>
        )
    }
}

export default ManufacturerInput