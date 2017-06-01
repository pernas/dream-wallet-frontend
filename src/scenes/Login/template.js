import React from 'react'

import LoginForm from './LoginForm'

import style from './style.scss'

const Login = (props) => {
  return (
    <section className={style.login}>
      <LoginForm onChange={props.onChange} onClick={props.onClick} />
    </section>
  )
}

export default Login
