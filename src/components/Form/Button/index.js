import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Button = (props) => {
  return (
    <button className='form-control btn btn-default' onClick={props.onClick}>
      {props.label}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default Button
