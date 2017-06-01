import React from 'react'
import PropTypes from 'prop-types'

import TextBox from 'components/Form/TextBox'
import PasswordBox from 'components/Form/PasswordBox'
import Button from 'components/Form/Button'

import style from './style.scss'

const LoginForm = (props) => {
  let mandatory = true

  return (
    <div className={style.loginForm}>
      <h3>Welcome Back!</h3>
      <TextBox
        name='guid'
        label='Wallet ID'
        onChange={props.onChange}
        mandatory={mandatory} />
      <PasswordBox
        name='password'
        label='Password'
        onChange={props.onChange}
        mandatory={mandatory} />
      <Button
        name='submit'
        label='Log in'
        onClick={props.onClick} />
    </div>
  )
}

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default LoginForm
