import React from 'react'

import LoginForm from './LoginForm'

import './style.scss'

const Login = (props) => {
  return (
    <section className='login'>
      <LoginForm onChange={props.onChange} onClick={props.onClick} />
    </section>
  )
}

export default Login
