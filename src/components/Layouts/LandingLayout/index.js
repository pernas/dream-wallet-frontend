import React from 'react'
import { Route } from 'react-router-dom'

import './style.scss'

import Header from './Header'
import Footer from './Footer'

const LandingLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className='landing'>
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          <Component {...matchProps} />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    )} />
  )
}

export default LandingLayout
