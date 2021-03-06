import React from 'react'

import style from './style.scss'

const title = 'Wallet ID'

const description = (
  <span>Wallet ID is your unique identifier.
    It is completely individual to you, and it is what you will use to log in and access your wallet.
    It is <b>not</b> a bitcoin address for sending or receiving.
    <span>Do not share your Wallet ID with others.</span>
  </span>
)

const settings = (
  <label>29f92cab-4dba-90d5-8a68-ab9cd22c3582</label>
)

export default {
  title, description, settings
}
