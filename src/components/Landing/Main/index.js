import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Main = () => {
  return (
    <section className='main'>
      <span>Main section</span>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Create Wallet</Link>
    </section>
  )
}

export default Main
