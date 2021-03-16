import NationalGridContainer from './containers/NationalGridContainer'
import VehicleContainer from './containers/VehicleContainer'
import PEVContainer from './containers/PEVContainer'
import LandingPage from './containers/LandingPage'
import NavBar from './components/navBar'

import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    
    return (
      <Router>
        <NavBar />
        <div style={{paddingTop: "55px"}}>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path="/nationalgrid" component={NationalGridContainer} />
          <Route exact path="/vehicles" component={VehicleContainer} />
          <Route exact path="/pev" component={PEVContainer} />
        </div>
        </Router>
    )
  }
}

export default App;