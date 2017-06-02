import React from 'react'

import InfoWell from 'components/Shared/InfoWell'
import SettingRow from 'components/Shared/SettingRow'

let makeButton = (text) => () => (
  <button className='btn button-primary'>{text}</button>
)

let plainDescriptionComponent = (text) => () => (
  <p className='f-16 em-300'>{text}</p>
)

let recoveryDesc = plainDescriptionComponent('Your recovery phrase can be used to restore all your funds in the case of a lost password or a loss of service at Blockchain. Note, that the recovery phrase never changes and recovers all of your existing bitcoins as well as newly received funds in this wallet. Please note that imported addresses are not backed up by the wallet recovery phrase. We strongly recommend to transfer funds from imported addresses into this wallet.')
let passwordDesc = plainDescriptionComponent('Your password is never shared with our servers, which means we cannot help reset your password if you forget it. Make sure you write down your recovery phrase which can restore access to your wallet in the event of a lost password.')
let hintDesc = plainDescriptionComponent('Your Blockchain Wallet never communicates your password to our servers. This means we have no idea what your password is and we cannot reset it if you forget it. Create a memorable password hint that we can send to your verified email address in case you forget your password.')
let secondPasswordDesc = plainDescriptionComponent('For additional security, you can choose a second password that is asked whenever you want to spend bitcoins. Beware that there is no password reset functionality.')
let twoFaDesc = plainDescriptionComponent('Protect your wallet from unauthorized access by enabling 2-Step Verification. You can choose to use a free app or your mobile phone number to secure your wallet.')
let rememberTwoFaDesc = plainDescriptionComponent('Your browser will be remembered for a short period of time, allowing you to login again without having to re-authenticate. Disable this to require full authentication every time you login. This will not affect your current browser until you delete all cookies.')

const Basic = () => {
  return (
    <div>
      <InfoWell>Basic security: Make sure your details are accurate and up to date to keep your wallet safe from unauthorized access and to help you restore access to your wallet in the case of a Wallet ID or password loss.</InfoWell>
      <SettingRow title='Wallet Recovery Phrase' Description={recoveryDesc} Setting={makeButton('Backup Phrase')} />
      <SettingRow title='Wallet Password' Description={passwordDesc} Setting={makeButton('Change')} />
      <SettingRow title='Password Hint' Description={hintDesc} Setting={makeButton('Change')} />
      <SettingRow title='Second Wallet Password' Description={secondPasswordDesc} Setting={makeButton('Set Second Password')} />
      <SettingRow title='2-step Verification' Description={twoFaDesc} Setting={makeButton('Enable')} />
      <SettingRow title='Remember 2-step Verification' Description={rememberTwoFaDesc} Setting={makeButton('Enable')} />
    </div>
  )
}

export default Basic
