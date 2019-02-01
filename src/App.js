import React, { Component } from 'react';
import './Reset.css';

import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Wizard />
      </div>
    );
  }
}

export default App;
