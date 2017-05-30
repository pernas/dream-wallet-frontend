import React from 'react'
import { Route } from 'react-router-dom'
import './style.scss'

import HeaderContainer from 'containers/Shared/Wallet/Header'
import MenuLeftContainer from 'containers/Shared/Wallet/MenuLeft'
import MenuTopContainer from 'containers/Shared/Wallet/MenuTop'

const WalletLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className='wallet'>
        <div className='header'>
          <HeaderContainer />
        </div>
        <div className='content'>
          <div className='left'>
            <MenuLeftContainer />
          </div>
          <div className='right'>
            <div className='top'>
              <MenuTopContainer />
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
