import React, { PureComponent } from 'react';

class ManufacturerInput extends PureComponent {

    renderForm = () => {
        return this.props.manufacturers.map((manufacturer, index) => {
            return <option key={index} value={manufacturer[0]}>{manufacturer[0]}</option>
        })
    }

    // renderForm = () =>{
    //     return this.props.manufacturers.map((manufacturer, index) => {
    //         return <option key={index} value={manufacturer[0]}>{manufacturer[0]}</option>
    //     })
    // }

    // componentDidUpdate() {
    //     this.props.getManufacturerAPI(this.props.selectedYear)
    // }

    componentDidUpdate(){
        if (this.props.selectedManufacturer){
            this.props.getModelAPI(this.props.selectedManufacturer)
        }
    }

    // componentDidUpdate(){
    //     console.log(this.props.selectedManufacturer)
    // }

    handleChange = (event) => {
        this.props.setSelectedManufacturer(event.target.value, this.props.selector)
    }

    // handleChange = (event) => {
    //     this.props.setSelectedManufacturer(event.target.value, this.props.selector)
    // }

    render() {
        return (
            <div onChange={this.handleChange}>
                {/* <select defaultValue="default" value={this.props.selectedManufacturer}> */}
                <select defaultValue="default" value={this.props.selectedManufacturer}>
                    {/* {!this.props.selectedManufacturer ? <option key="default" value={null} >please select a year</option> : null} */}
                    {this.renderForm()}
                </select>
            </div>
        )
    }
    }

//     render(){
//         return(
//             <div onChange={this.handleChange}>
//                 <select defaultValue="default" value={this.props.selectedManufacturer}>
//                 {!this.props.selectedManufacturer ? <option key="default" value={null} >please select a manufacturers</option> : null}
//                 {this.renderForm()}
//                 </select>
//             </div>
//         )
//     }
// }

export default ManufacturerInput







