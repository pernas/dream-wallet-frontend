import React from 'react'
import { Route } from 'react-router-dom'

import './style.scss'

import HeaderContainer from 'containers/Shared/Landing/Header'
import FooterContainer from 'containers/Shared/Landing/Footer'

const LandingLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className='landing'>
        <div className='header'>
          <HeaderContainer />
        </div>
        <div className='content'>
          <Component {...matchProps} />
        </div>
        <div className='footer'>
          <FooterContainer />
        </div>
      </div>
    )} />
  )
}

export default LandingLayout
