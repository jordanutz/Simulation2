import React from 'react'
import './House.css'
import remove from './assets/delete.png'

const House = (props) => {
  return (
    <div className="House">
      <img id="remove" src={remove} onClick={() => props.removeListing(props.id)} />
      <div className="HouseImage">
        <img src={props.image} />
      </div>
      <div className="HouseInfo">
        <p>Property Name: {props.name}</p>
        <p>Address: {props.address}</p>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        <p>Zip: {props.zip}</p>
      </div>
      <div className="HousePrices">
        <p>Mortgage: {props.mortgage}</p>
        <p>Rent: {props.rent}</p>
      </div>
    </div>
  )
}

export default House;
