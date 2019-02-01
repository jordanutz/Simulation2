import React from 'react'
import './House.css'

const House = (props) => {
  return (
    <div className="House">
      <p>Property Name: {props.name}</p>
      <p>Address: {props.address}</p>
      <p>City: {props.city}</p>
      <p>State: {props.state}</p>
      <p>Zip: {props.zip}</p>
    </div>
  )
}

export default House;
