import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

const Button = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      {props.label}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default Button
