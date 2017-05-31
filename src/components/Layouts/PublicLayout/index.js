import React from 'react'
import { Route } from 'react-router-dom'
import './style.scss'

import Header from 'components/Shared/Public/Header'
import FooterContainer from 'containers/Shared/Public/Footer'

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
          <FooterContainer />
        </div>
      </div>
    )} />
  )
}

export default PublicLayout
