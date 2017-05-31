import React from 'react'
import PropTypes from 'prop-types'

import LoginForm from './LoginForm'
import './style.scss'

const Login = (props) => {
  return (
    <section className='login'>
      <LoginForm onChange={props.onChange} onClick={props.onClick} />
    </section>
  )
}

Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Login
