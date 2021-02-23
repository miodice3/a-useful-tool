import React, { Component } from 'react';


class CalculatorContainer extends Component {
    render(){
        return(
            <div>
                <br />
                I am the calculator containter <br />
                my components will be <br />
                1) enter estimated kwh to consume, i will return grams high vs grams low<br />
                2) enter your cars mpg, using known g/gallon of gas, i can calculate the difference in emissions
            </div>
        )
    }
}

export default CalculatorContainer