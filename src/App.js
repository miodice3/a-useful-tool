import CarbonContainer from './containers/carbonContainer'
import CalculatorContainer from './containers/calculatorContainer'


import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount(){
    fetch('https://api.carbonintensity.org.uk/intensity/2021-02-23T21:15Z/fw48h')
    .then(response=>response.json())
    .then((response)=>console.log(response))
  }

  render() {
    
    return (
      <Router>
        <div>
          <Route exact path="/inputs" component={CarbonContainer} />
          <Route exact path="/calculator" component={CalculatorContainer} />
        </div>
        </Router>
    );
    
  }
}

export default App;