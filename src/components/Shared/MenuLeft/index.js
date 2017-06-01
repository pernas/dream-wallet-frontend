import React from 'react'
import MenuLeftLink from './MenuLeftLink'

import './style.scss'

// import Adverts from './Adverts'
// import StepBar from './StepBar'

const MenuLeft = () => {
  let isSettingsActive = (match, location) => (
    (/^\/settings\//).test(location.pathname)
  )

  return (
    <div className='menu-left'>
      <ul>
        <MenuLeftLink route='/' icon='icon-home' title='Home' />
        <MenuLeftLink route='/transactions' icon='icon-tx' title='Transactions' />
        <MenuLeftLink route='/buy-sell' icon='icon-bitcoin' title='Buy bitcoin' />
        <MenuLeftLink route='/security-center' icon='icon-lock' title='Security center' />
        <MenuLeftLink route='/settings/info' icon='icon-settings' title='Settings' isActive={isSettingsActive} />
        <div className='menu-sub'>
          <MenuLeftLink route='/settings/info' title='Wallet Information' />
          <MenuLeftLink route='/settings/preferences' title='Preferences' />
          <MenuLeftLink route='/settings/security' title='Security' />
          <MenuLeftLink route='/settings/addresses' title='Addresses' />
        </div>
        <MenuLeftLink route='/faq' icon='icon-help' title='Faq' />
      </ul>
      {/* <Adverts /> */}
      {/* <StepBar /> */}
    </div>
  )
}

export default MenuLeft
