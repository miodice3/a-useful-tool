import React, { PureComponent } from 'react';

class YearInput extends PureComponent {

    renderForm = () => {
        return this.props.years.map((year, index) => {
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
        return (
            <div onChange={this.handleChange}>
                <select defaultValue="default" value={this.props.selectedYear}>
                    {!this.props.selectedYear ? <option key="default" value={null} >Please Select a Year</option> : null}
                    {this.renderForm()}
                </select>
            </div>
        )
    }
}

export default YearInput