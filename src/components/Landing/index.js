import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Landing = () => {
  return (
    <section className='landing'>
      <span>Landing page</span>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Create Wallet</Link>
    </section>
  )
}

export default Landing
