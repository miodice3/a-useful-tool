import React, { Component } from 'react';

class YearInput extends Component {

    renderForm = () =>{
        return this.props.years.map((year, index)=><option key={index} value={year.value[0]}>{year.text[0]}</option>)
    }

    handleChange = (event) =>{
        event.preventDefault()
        this.props.getManufacturerAPI(event.target.value)
    }

    render(){
        return(
            <div onChange={this.handleChange}>
                <select>
                <option value="null">Select Year</option>
                {this.renderForm()}
                </select>
            </div>
        )
    }
}

export default YearInput