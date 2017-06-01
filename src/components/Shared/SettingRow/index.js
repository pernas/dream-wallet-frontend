import React from 'react'
import './style.scss'

const SettingRow = ({ title, Description, Setting }) => (
  <div className='setting-row'>
    <div className='description'>
      <label className='em-400 type-h5'>{title}</label>
      <div>
        <Description />
      </div>
    </div>
    <div className='setting'>
      <Setting />
    </div>
  </div>
)

export default SettingRow
