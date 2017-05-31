import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from 'img/blockchain-vector.svg'
import './style.scss'

const Header = () => {
  return (
    <header className='public'>
      <div className='container'>
        <NavLink to='/'>
          <img src={logo} />
        </NavLink>
      </div>
    </header>
  )
}

export default Header
