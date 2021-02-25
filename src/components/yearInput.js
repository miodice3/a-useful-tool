import React, { Component } from 'react';

class YearInput extends Component {

    componentDidMount(){
        console.log("this is year selection")
    }

    render(){
        return(
            <div>
                <label>Select Vehicle Year</label><br/>
                <select>
                    
                    <option value="grape">Grape</option>
                    <option value="grapefruit">grapefruit</option>
                    <option value="test">test</option>
                </select>
            </div>
        )
    }
}

export default YearInput