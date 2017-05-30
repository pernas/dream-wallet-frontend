import React from 'react'
import PropTypes from 'prop-types'

import LoginForm from './LoginForm'
import './style.scss'

const Login = (props) => {
  return (
    <section className='login'>
      <LoginForm onChange={props.onChange} onSubmit={props.onSubmit} />
    </section>
  )
}

Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Login
