import React, {Component} from 'react';
import './Wizard3.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {getListings} from '../../redux/reducer'

class Wizard3 extends Component {
  constructor () {
    super()
    this.state = {
      mortgage: '',
      rent: ''
    }
  }

  handleMortgage = (event) => {
    this.setState({
      mortgage: event.target.value
    })
  }

  handleRent = (event) => {
    this.setState({
      rent: event.target.value
    })
  }

  submitListing = (name, address, city, state, zip, image, mortgage, rent) => {

    console.log('hit')


    const listing = {
      name: name,
      address: address,
      city: city,
      state: state,
      zip: zip,
      image: image,
      mortgage: mortgage,
      rent: rent
    }

    console.log(listing)

    axios.post('/api/listing', listing).then(res => {
      this.props.getListings(res.data)
      this.props.history.push('/')
    })
  }

  render () {

    const {name, address, city, state, zip, image} = this.props.location.state
    const {mortgage, rent} = this.state

    console.log(this.props)

    return (
      <main>
        <div id="WizardDirectory" className="Directory">
          <div className="WizardHeader">
            <h1 id="WizardHeader">Add New Listing</h1>
            <button id="CancelButton">Cancel</button>
          </div>
          <div className="WizardInput">
            <span>Mortgage:</span><input value={this.state.mortgage} onChange={this.handleMortgage}/>
            <span>Rent:</span><input value={this.state.rent} onChange={this.handleRent}/>
          </div>
          <div className="WizardSubmit">
            <button onClick={() => this.submitListing(name, address, city, state, zip, image, mortgage, rent)}>Complete</button>
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    listings: state.listings
  }
}

const mapDispatchToProps = {
  getListings
}


export default connect(mapStateToProps, mapDispatchToProps)(Wizard3);
