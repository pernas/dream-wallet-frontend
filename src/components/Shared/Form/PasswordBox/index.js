import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Password = (props) => {
  let wrapperClass = 'form-group'
  if (props.error && props.error.length > 0) {
    wrapperClass += ' ' + 'has-error'
  }

  let labelClass = ''
  if (props.mandatory) {
    labelClass += 'required'
  }

  return (
    <div className={wrapperClass}>
      <label className={labelClass} htmlFor={props.name}>{props.label}</label>
      <div className='field'>
        <input
          type='password'
          name={props.name}
          className='form-control'
          placeholder={props.placeholder}
          value={props.value}
          required={props.mandatory}
          onChange={props.onChange} />
        <div className='input'>{props.error}</div>
      </div>
    </div>
  )
}

Password.defaultProps = {
  mandatory: false
}

Password.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  mandatory: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
}

export default Password