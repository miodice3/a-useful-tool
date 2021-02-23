import CarbonContainer from './containers/carbonContainer'
import CalculatorContainer from './containers/calculatorContainer'

import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount(){
    fetch('')
  }

  render() {
    
    return (
      <Router>
        <div>
          I will become a container component for the nav bar
          <Route exact path="/inputs" component={CarbonContainer} />
          <Route exact path="/calculator" component={CalculatorContainer} />
        </div>
        </Router>
    );
    
  }
}

export default App;