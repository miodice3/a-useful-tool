import React, { PureComponent } from 'react';

class ManufacturerInput extends PureComponent {

    renderForm = () => {
        return this.props.manufacturers.map((manufacturer, index) => {
            return <option key={index} value={manufacturer[0]}>{manufacturer[0]}</option>
        })
    }

    componentDidUpdate() {
        if (this.props.selectedManufacturer) {
            this.props.getModelAPI(this.props.selectedYear, this.props.selectedManufacturer, this.props.selector)
        }
    }

    handleChange = (event) => {
        this.props.setSelectedManufacturer(event.target.value, this.props.selector)
    }

    render() {
        return (
            <div onChange={this.handleChange}>
                <select defaultValue="default" value={this.props.selectedManufacturer}>
                    {!this.props.selectedManufacturer ? <option key="default" value={null} >Please Select A Manufacturer</option> : null}
                    {this.renderForm()}
                </select>
            </div>
        )
    }
}

export default ManufacturerInput







