import React from 'react'

import Basic from './Basic'
import Advanced from './Advanced'

import style from './style.scss'

const SecuritySettings = ({ advanced, toggleAdvanced }) => {
  let advancedButtonClass = 'button-default' + (advanced ? ' active' : '')
  return (
    <section className={style.securitySettings}>
      <Basic />
      <div style={{ paddingTop: 16, paddingBottom: 40 }}>
        <button className={advancedButtonClass} onClick={toggleAdvanced}>Advanced Settings</button>
      </div>
      {advanced && (<Advanced />)}
    </section>
  )
}

export default SecuritySettings
