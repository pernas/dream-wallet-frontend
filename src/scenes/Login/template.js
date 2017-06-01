import React from 'react'
import { NavLink } from 'react-router-dom'

import TextBox from 'components/Form/TextBox'
import PasswordBox from 'components/Form/PasswordBox'
import Button from 'components/Form/Button'

import style from './style.scss'

const Login = (props) => {
  return (
    <section className={style.login}>
      <div className={style.header}>
        <h3>Welcome Back!</h3>
        <div className={style.inline}>
          <h5>or</h5>
          <NavLink to='/register'>Sign Up</NavLink>
        </div>
      </div>
      <h4>Sign in to your wallet below</h4>
      <div className={style.separator} />
      <TextBox
        name='guid'
        label='Wallet ID'
        onChange={props.onChange} />
      <h5>
        Find the login link in your email, e.g.
        <i>blockchain.info/wallet/1111-222-333...</i>
        The series of numbers and dashes at the end of the link is your Wallet ID.
      </h5>
      <PasswordBox
        name='password'
        label='Password'
        onChange={props.onChange} />
      <Button
        name='submit'
        label='Log in'
        onClick={props.onClick} />
      <div className={style.footer}>
        <div className={style.inline}>
          <h4>Having some trouble?</h4>
          <NavLink to='/login-help'>View Options</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Login
