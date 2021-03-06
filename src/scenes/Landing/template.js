import React from 'react'
import CSSModules from 'react-css-modules'

import Main from './Main'
import NewToBitcoin from './NewToBitcoin'
import Reviews from './Reviews'
import WhyUseBlockchain from './WhyUseBlockchain'

import style from './style.scss'

const Landing = () => {
  return (
    <div>
      <Main />
      {/*<NewToBitcoin />
       <Reviews />
       <WhyUseBlockchain />*/}
    </div>
  )
}

export default CSSModules(Landing, style)
