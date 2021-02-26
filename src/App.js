import NationalGridContainer from './containers/NationalGridContainer'
import VehicleContainer from './containers/VehicleContainer'

import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    
    return (
      <Router>
        <div>
          <Route exact path='/' />
          <Route exact path="/nationalgrid" component={NationalGridContainer} />
          <Route exact path="/vehicles" component={VehicleContainer} />
        </div>
        </Router>
    )
  }
}

export default App;