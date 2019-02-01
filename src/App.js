import React, { Component } from 'react';
import './Reset.css';
import {connect} from 'react-redux'
import axios from 'axios'

import Header from './Components/Header/Header'
import routes from './routes.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
