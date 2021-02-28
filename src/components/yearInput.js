import React, { PureComponent } from 'react';

class YearInput extends PureComponent {

    renderForm = () => {
        return this.props.years.map((year, index) => {
            // if (year.text[0] == this.props.selectedYear) {
            //     return <option key="default" value={year.value[0]}>{year.text[0]}</option>
            // } else {
            //     return <option key={index} value={year.value[0]}>{year.text[0]}</option>
            // }
            return <option key={index} value={year.value[0]}>{year.text[0]}</option>
        })
    }

    componentDidUpdate() {
        this.props.getManufacturerAPI(this.props.selectedYear)
    }

    handleChange = (event) => {
        this.props.setSelectedYear(event.target.value, this.props.selector)
    }

    render() {
        // let selectedOptionId = "default"
        return (
            <div onChange={this.handleChange}>
                <select defaultValue="default" value={this.props.selectedYear}>
                    {!this.props.selectedYear ? <option key="default" value={null} >please select a year</option> : null}
                    {this.renderForm()}
                </select>
            </div>
        )
    }
}

export default YearInput


    // renderForm = () =>{
    //     return this.props.years.map( (year, index) => {
    //         if (year === this.props.selectedYear) {
    //             return <option key={index} value={year.value[0]} selected>{year.text[0]}</option>
    //         }
    //         return <option key={index} value={year.value[0]} selected>{year.text[0]}</option>
    //     })
    // }