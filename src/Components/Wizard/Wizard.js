import React, {Component} from 'react'
import './Wizard.css'
import {connect} from 'react-redux'
import {getListings} from '../../redux/reducer'
import {Link} from 'react-router-dom'


class Wizard extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleAddress = (event) => {
    this.setState({
      address: event.target.value
    })
  }

  handleCity = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleState = (event) => {
    this.setState({
      state: event.target.value
    })
  }

  handleZip = (event) => {
    this.setState({
      zip: event.target.value
    })
  }

  render () {

    const {name, address, city, state, zip} = this.state

    return (
      <div className="Wizard">
        <main>
          <div id="WizardDirectory" className="Directory">
            <div className="WizardHeader">
              <h1 id="WizardHeader">Add New Listing</h1>
              <Link to='/'><button id="CancelButton">Cancel</button></Link>
            </div>
            <div className="WizardInput">
              <h2>Property Name:</h2><input value={this.state.name} onChange={this.handleName}/><br/>
              <h2>Address:</h2><input value={this.state.address} onChange={this.handleAddress}/><br/>
              <div className="flex">
                <h2>City:</h2><input value={this.state.city} onChange={this.handleCity}/>
                <h2>State:</h2><input value={this.state.state} onChange={this.handleState}/>
                <h2>Zip:</h2><input value={this.state.zip} onChange={this.handleZip}/><br/>
              </div>
            </div>
            <div className="WizardSubmit">
              <Link to={{
                  pathname: '/wizard2',
                  state: {name: this.state.name,
                          address: this.state.address,
                          city: this.state.city,
                          state: this.state.state,
                          zip: this.state.zip
                  }
                }}><button>Next Step</button></Link>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Wizard;
