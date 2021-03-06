import React from 'react'
import { NavLink } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import style from './style.scss'
import logo from 'img/blockchain-vector.svg'

const Header = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <header styleName='header'>
            <NavLink to='/'>
              <img src={logo} styleName='logo' />
            </NavLink>
          </header>
        </div>
      </div>
    </div>
  )
}

export default CSSModules(Header, style)
