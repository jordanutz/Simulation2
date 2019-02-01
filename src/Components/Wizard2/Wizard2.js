import React, {Component} from 'react';
import './Wizard2.css'
import {Link} from 'react-router-dom'

class Wizard2 extends Component {
  constructor () {
    super()
    this.state = {
      image: ''
    }
  }

  handleImage = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  render () {

    // console.log(this.props)

    return (
      <main>
        <div id="WizardDirectory" className="Directory">
          <div className="WizardHeader">
            <h1 id="WizardHeader">Add New Listing</h1>
            <Link to='/'><button id="CancelButton">Cancel</button></Link>
          </div>
          <div className="WizardInput">
            <span>Image:</span><input value={this.state.image} onChange={this.handleImage}/>
          </div>
          <div className="WizardSubmit">
            <Link to={{
                pathname: '/wizard3',
                state: {name: this.props.location.state.name,
                  address: this.props.location.state.address,
                  city: this.props.location.state.city,
                  state: this.props.location.state.state,
                  zip: this.props.location.state.zip,
                  image: this.state.image}
              }}><button>Next Step</button></Link>
          </div>
        </div>
      </main>
    )
  }
}

export default Wizard2;
