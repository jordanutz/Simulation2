import React from 'react'
import './Header.css'

import Logo from './assets/houser_logo.png'

const Header = (props) => {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Houser Logo"/>
        <h1>Houser</h1>
      </nav>
    </header>
  )
}

export default Header
