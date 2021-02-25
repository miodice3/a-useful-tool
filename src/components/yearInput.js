import React, { Component } from 'react';

class YearInput extends Component {

    renderForm = () =>{
        return this.props.years.map(year=><option value="test">{year.text[0]}</option>)

    }


    render(){
        
        return(
            <div>
                {console.log("within year render component", this.props.years[0].text[0])}
                <select>
                {/* <option>{this.props.years[0].text[0]}</option> */}
                {this.renderForm()}
                </select>
            </div>
        )
    }
}

export default YearInput

{/* <label>Select Vehicle Year</label><br/>
<select>
    
    <option value="grape">Grape</option>
    <option value="grapefruit">grapefruit</option>
    <option value="test">test</option>
</select> */}