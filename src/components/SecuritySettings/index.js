import React from 'react'
import './style.scss'

import Basic from './Basic'
import Advanced from './Advanced'

const SecuritySettings = ({ advanced, toggleAdvanced }) => {
  let advancedButtonClass = 'button-default' + (advanced ? ' active' : '')
  return (
    <section className='security-settings'>
      <Basic />
      <div style={{ paddingTop: 16, paddingBottom: 40 }}>
        <button className={advancedButtonClass} onClick={toggleAdvanced}>Advanced Settings</button>
      </div>
      {advanced && (<Advanced />)}
    </section>
  )
}

export default SecuritySettings
