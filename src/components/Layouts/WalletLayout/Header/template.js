import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import logo from 'img/blockchain-vector.svg'
import './style.scss'

const Header = (props) => {
  return (
    <header className='wallet'>
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <NavLink to='/' className='navbar-brand'>
              <img src={logo} />
            </NavLink>
          </div>
          <ul className='nav navbar-nav navbar-right'>
            <li className={(props.exploreMenuDisplayed ? 'dropdown open' : 'dropdown')}>
              <a href='#' className='dropdown-toggle' onClick={props.clickExploreMenu}>
                <span>Explore</span>
                <i className='ti-angle-down mlm' />
              </a>
              <ul className='dropdown-menu'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Charts</a></li>
                <li><a href='#'>Stats</a></li>
                <li><a href='#'>Markets</a></li>
                <li><a href='#'>API</a></li>
              </ul>
            </li>
            <li><a href='#'><span>Sign out</span></a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  exploreMenuDisplayed: PropTypes.bool.isRequired,
  clickExploreMenu: PropTypes.func.isRequired
}

export default Header
