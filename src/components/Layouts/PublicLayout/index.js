import React from 'react'
import { Route } from 'react-router-dom'
import './style.scss'

import HeaderContainer from 'containers/Shared/Public/Header'
import Footer from 'components/Shared/Public/Footer'

const PublicLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className='public'>
        <div className='public-header'>
          <HeaderContainer />
        </div>
        <div className='public-content'>
          <Component {...matchProps} />
        </div>
        <div className='public-footer'>
          <Footer />
        </div>
      </div>
    )} />
  )
}

export default PublicLayout
