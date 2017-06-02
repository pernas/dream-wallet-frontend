import React from 'react'

import style from './style.scss'
import typography from 'sass/utilities/typography.scss'
import button from 'sass/elements/button.scss'

const title = 'Wallet Recovery Phrase'

const description = (
  <span className={typography.h4}>
    Your recovery phrase can be used to restore all your funds in the case of a lost password or a loss of service at Blockchain.
    Note, that the recovery phrase never changes and recovers all of your existing bitcoins as well as newly received funds in this wallet.
    Please note that imported addresses are not backed up by the wallet recovery phrase.
    We strongly recommend to transfer funds from imported addresses into this wallet.
  </span>
)

const settings = (
  <div>
    <button className={button.primary}>Backup Phrase</button>
  </div>
)

export default {
  title, description, settings
}
