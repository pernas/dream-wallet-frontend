import React from 'react'


import Main from './Main'
import NewToBitcoin from './NewToBitcoin'
import Reviews from './Reviews'
import WhyUseBlockchain from './WhyUseBlockchain'
import './style.scss'

const Landing = () => {
  return (
    <section className='landing'>
      <Main />
      <NewToBitcoin />
      <Reviews />
      <WhyUseBlockchain />
    </section>
  )
}

export default Landing
