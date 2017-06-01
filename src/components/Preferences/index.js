import React from 'react'
import './style.scss'

import InfoWell from 'components/Shared/InfoWell'
import SettingRow from 'components/Shared/SettingRow'

let plainDescriptionComponent = (text) => () => (
  <p className='f-16 em-300'>{text}</p>
)

let emailDesc = plainDescriptionComponent('Your verified email address is used to send login codes when suspicious or unusual activity is detected, to remind you of your wallet login ID, and to send bitcoin payment alerts when you receive funds.')
let mobileDesc = plainDescriptionComponent('Your mobile phone can be used to enable two-factor authentication, helping to secure your wallet from unauthorized access, and to send bitcoin payment alerts when you receive funds.')
let walletLangDesc = plainDescriptionComponent('Set your preferred language.')
let localCurrencyDesc = plainDescriptionComponent('Select your local currency.')
let bitcoinUnitDesc = plainDescriptionComponent('Adjust the precision you would prefer bitcoin values to be displayed in.')
let notificationsDesc = plainDescriptionComponent('Get notified when you receive bitcoin.')
let linkHandlingDesc = plainDescriptionComponent('Enable this to allow your Blockchain Wallet to handle bitcoin payment links in the web browser. This will make your experience more convenient when transacting online.')
let autoLogoutDesc = plainDescriptionComponent('After a certain period of inactivity, you will be automatically logged out of your wallet.')
let themesDesc = plainDescriptionComponent('Try out different themes for the wallet.')

let emailSetting = () => (
  <div>
    <p className='em-500 type-h5'>test@example.com</p>
    <button className='btn button-primary'>Change</button>
  </div>
)

let mobileSetting = () => (
  <div>
    <button className='btn button-primary'>Change</button>
  </div>
)

let walletLangSetting = () => (
  <p>[Language Dropdown]</p>
)

let localCurrencySetting = () => (
  <p>[Currency Dropdown]</p>
)

let bitcoinUnitSetting = () => (
  <p>[Bitcoin Unit Dropdown]</p>
)

let notificationsSetting = () => (
  <p>[Notifications configuration]</p>
)

let linkHandlingSetting = () => (
  <div>
    <button className='btn button-primary'>Change</button>
    <p>We can't detect whether or not handling of bitcoin links has been enabled. If it has already been enabled, nothing will happen.</p>
  </div>
)

let autoLogoutSetting = () => (
  <div>
    <p className='em-500 type-h5'>10 minutes</p>
    <button className='btn button-primary'>Change</button>
  </div>
)

let themesSetting = () => (
  <p>[Themes Dropdown]</p>
)

const Preferences = () => {
  return (
    <section className='preferences'>
      <InfoWell>Customize your wallet experience.</InfoWell>
      <SettingRow title='Email Address' Description={emailDesc} Setting={emailSetting} />
      <SettingRow title='Mobile Number' Description={mobileDesc} Setting={mobileSetting} />
      <SettingRow title='Wallet Language' Description={walletLangDesc} Setting={walletLangSetting} />
      <SettingRow title='Local Currency' Description={localCurrencyDesc} Setting={localCurrencySetting} />
      <SettingRow title='Bitcoin Unit' Description={bitcoinUnitDesc} Setting={bitcoinUnitSetting} />
      <SettingRow title='Notifications' Description={notificationsDesc} Setting={notificationsSetting} />
      <SettingRow title='Bitcoin Links Handling' Description={linkHandlingDesc} Setting={linkHandlingSetting} />
      <SettingRow title='Auto Logout' Description={autoLogoutDesc} Setting={autoLogoutSetting} />
      <SettingRow title='Themes' Description={themesDesc} Setting={themesSetting} />
    </section>
  )
}

export default Preferences
