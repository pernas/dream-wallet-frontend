import React from 'react'
import { Route } from 'react-router-dom'
import './style.scss'

import Header from './Header'
import Footer from './Footer'

const PublicLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className='public'>
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

export default PublicLayout
