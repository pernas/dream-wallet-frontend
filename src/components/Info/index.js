import React from 'react'
import './style.scss'

import InfoWell from 'components/Shared/InfoWell'
import SettingRow from 'components/Shared/SettingRow'

const Info = () => {
  let walletId = () => (
    <label className='em-500 type-h5'>29f92cab-4dba-90d5-8a68-ab9cd22c3582</label>
  )

  let walletIdDesc = () => (
    <p className='f-16 em-300'>
      <span>Wallet ID is your unique identifier. It is completely individual to you, and it is what you will use to log in and access your wallet. It is <b>not</b> a bitcoin address for sending or receiving. <span className='security-red'>Do not share your Wallet ID with others.</span></span>
    </p>
  )

  let pairingCode = () => (
    <button className='btn button-primary'>Show Pairing Code</button>
  )

  let pairingCodeDesc = () => (
    <p className='f-16 em-300'>
      <span>Scan the code <i>(click on 'Show Pairing Code')</i> with your Blockchain Wallet (iOS or Android) for a seamless connection to your wallet. Download the <a>iOS app here</a> and the <a>Android app here</a>. <span className='security-red'>Do not share your Pairing Code with others.</span></span>
    </p>
  )

  return (
    <section className='info'>
      <InfoWell>Use your Wallet ID to log in using our web client, or simply scan the code below (click on 'Show Pairing Code') with your Blockchain Mobile Wallet (iOS or Android) to access your wallet on your mobile devices.</InfoWell>
      <SettingRow title='Wallet ID' Description={walletIdDesc} Setting={walletId} />
      <SettingRow title='Mobile App Pairing Code' Description={pairingCodeDesc} Setting={pairingCode} />
    </section>
  )
}

export default Info
