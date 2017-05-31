import React from 'react'
import MenuLeftLink from './MenuLeftLink'

import './style.scss'

const MenuLeft = () => {
  return (
    <nav className='menu-left'>
      <ul>
        <MenuLeftLink route='/home' icon='icon-home' title='Home' />
        <MenuLeftLink route='/transactions' icon='icon-tx' title='Transactions' />
        <MenuLeftLink route='/buy-sell' icon='icon-bitcoin' title='Buy bitcoin' />
        <MenuLeftLink route='/security-center' icon='icon-lock' title='Security center' />
        <MenuLeftLink route='/settings' icon='icon-settings' title='Settings' />
        <MenuLeftLink route='/faq' icon='icon-help' title='Faq' />
      </ul>
    </nav>
  )
}

export default MenuLeft
