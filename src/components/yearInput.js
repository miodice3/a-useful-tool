import React, { Component } from 'react';

class YearInput extends Component {

    componentDidMount(){
        const url = "https://www.fueleconomy.gov/ws/rest/vehicle/menu/year"
        fetch(url)
        .then((response) => response.text())
        .then((resp) => {
            console.log(resp);
        })
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