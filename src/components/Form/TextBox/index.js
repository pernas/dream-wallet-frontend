import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

const TextBox = (props) => {
  let labelClass = ''
  if (props.mandatory) {
    labelClass += 'required'
  }

  return (
    <div className={style.textBox}>
      <label className={labelClass} htmlFor={props.name}>{props.label}</label>
      <input
        type='text'
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        required={props.mandatory}
        onChange={props.onChange} />
    </div>
  )
}

TextBox.defaultProps = {
  mandatory: false
}

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  mandatory: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

export default TextBox
