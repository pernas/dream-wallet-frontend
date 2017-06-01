import React from 'react'

import InfoWell from 'components/Shared/InfoWell'
import SettingRow from 'components/Shared/SettingRow'

let makeButton = (text) => () => (
  <button className='btn button-primary'>{text}</button>
)

let plainDescriptionComponent = (text) => () => (
  <p className='f-16 em-300'>{text}</p>
)

let loggingDesc = plainDescriptionComponent('Record wallet activity and display it in your activity feed.')
let ipRestricDesc = plainDescriptionComponent('Only allow login from IP address in the whitelist. If you do not have a static IP address, this may lock you out of your wallet. If you have verified your email address, you will be notified of any suspicious login attempts.')
let ipWhitelistDesc = plainDescriptionComponent('Allow login without email authentication from the following list of comma-separated IP addresses. Use % as a wildcard.')
let torAccessDesc = plainDescriptionComponent('Enable the following option to prevent IP addresses that are known to be part of the Tor anonymizing network from accessing your wallet. The Tor network is frequently used by hackers attempting to access Blockchain users wallets.')
let pbkdf2Desc = plainDescriptionComponent('This increases the difficulty of discovering your password using a brute-force attack but slows down loading and saving your wallet.')
let apiAccessDesc = plainDescriptionComponent('Use our API to interact with your wallet programtically. Follow the steps here to get started.')

let pbkdf2Setting = () => (
  <div>
    <p className='em-500 type-h5'>5000</p>
    <button className='btn button-primary'>Change</button>
  </div>
)

const Advanced = () => {
  return (
    <div>
      <InfoWell>Advanced security: Further customize your security settings for more granular access control and tracking. Do not modify these settings unless you know what you are doing.</InfoWell>
      <SettingRow title='Activity Logging' Description={loggingDesc} Setting={makeButton('Enable')} />
      <SettingRow title='Login IP Restriction' Description={ipRestricDesc} Setting={makeButton('Enable')} />
      <SettingRow title='IP Whitelist' Description={ipWhitelistDesc} Setting={makeButton('Change')} />
      <SettingRow title='Wallet Access via Tor' Description={torAccessDesc} Setting={makeButton('Block')} />
      <SettingRow title='Password Stretching (PBKDF2)' Description={pbkdf2Desc} Setting={pbkdf2Setting} />
      <SettingRow title='API Access' Description={apiAccessDesc} Setting={() => null} />
    </div>
  )
}

export default Advanced
