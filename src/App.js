import NationalGridContainer from './containers/NationalGridContainer'
import VehicleSelectionContainer from './containers/vehicleSelectionContainer'

import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    
    return (
      <Router>
        <div>
          <Route exact path='/' />
          <Route exact path="/nationalgrid" component={NationalGridContainer} />
          <Route exact path="/vehicleselection" component={VehicleSelectionContainer} />
        </div>
        </Router>
    )
  }
}

export default App;