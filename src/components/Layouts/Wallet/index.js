import React from 'react'
import { Route } from 'react-router-dom'
import './style.scss'

import Header from './Header'
import MenuLeft from './MenuLeft'
import MenuTop from './MenuTop'

const WalletLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className='wallet'>
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          <div className='left'>
            <MenuLeft />
          </div>
          <div className='right'>
            <div className='top'>
              <MenuTop />
            </div>
            <div className='page'>
              <Component {...matchProps} />
            </div>
          </div>
        </div>
      </div>
    )} />
  )
}

export default WalletLayout
