import React from 'react'
import PropTypes from 'prop-types'

import TextBox from 'components/Shared/Form/TextBox'
import PasswordBox from 'components/Shared/Form/PasswordBox'
import Button from 'components/Shared/Form/Button'
import './style.scss'

const LoginForm = (props) => {
  let mandatory = true

  return (
    <form className='login-form'>
      <h3>Welcome Back!</h3>
      <TextBox
        name='username'
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
        onClick={props.onSubmit} />
    </form>
  )
}

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm
