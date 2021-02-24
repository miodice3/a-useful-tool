import CarbonContainer from './containers/carbonContainer'
import CalculatorContainer from './containers/calculatorContainer'


import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

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