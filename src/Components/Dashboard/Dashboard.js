import React, {Component} from 'react'
import './Dashboard.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {getListings} from '../../redux/reducer'

import House from '../House/House'

class Dashboard extends Component {
  constructor () {
    super()
    this.removeListing = this.removeListing.bind(this)
  }

  componentDidMount () {
    this.fireListings()
  }

  fireListings = () => {
    console.log('hit')
    axios.get('/api/listings').then(res => {
      this.props.getListings(res.data)
    })
  }

  removeListing (id) {
    axios.delete(`/api/listings/${id}`).then( res => {
      this.props.getListings(res.data)
      this.fireListings()
    })
  }

  render () {

    const displayedListings = this.props.listings.map(listing => {
      // console.log(listing)
      return (
        <House key={listing.id} {...listing} removeListing={this.removeListing}/>
      )
    })

    return (


      <main>
        <div className="Directory">
          <div className="Dashboard">
            <h1>Dashboard</h1>
            <Link to='/wizard'><button>Add New Property</button></Link>
          </div>
          <div className="Listings">
            <h2>Home Listings</h2>
            {displayedListings}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
