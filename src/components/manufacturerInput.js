import React, { Component } from 'react';

class ManufacturerInput extends Component {

    renderForm = () =>{
        // debugger
        return this.props.manufacturers.map((manufacturer, index)=><option key={index} value={manufacturer[0]}>{manufacturer[0]}</option>)
    }

    handleChange = (event) =>{
        event.preventDefault()
        // this.props.getManufacturerAPI(event.target.value)
        console.log("this manufacturer was selected: ", event.target.value)
    }

    render(){
        return(
            <div onChange={this.handleChange}>
                <select>
                <option value="null">Select Manufacturer</option>
                {this.renderForm()}
                </select>
            </div>
        )
    }
}

export default ManufacturerInput