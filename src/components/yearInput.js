import React, { PureComponent } from 'react';

class YearInput extends PureComponent {

    renderForm = () =>{
        return this.props.years.map( (year, index) => {
            return <option key={index} value={year.value[0]}>{year.text[0]}</option>
        })
    }

    componentDidUpdate(){
        this.props.getManufacturerAPI(this.props.selectedYear)
    }

    handleChange = (event) => {
        this.props.setSelectedYear(event.target.value, this.props.selector)
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

export default YearInput


    // renderForm = () =>{
    //     return this.props.years.map( (year, index) => {
    //         if (index === this.props.selectedYear) {
    //             return <option key={index} value={year.value[0]} selected>{year.text[0]}</option>
    //         }
    //         return <option key={index} value={year.value[0]} selected>{year.text[0]}</option>
    //     })
    // }