import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Login from 'components/Login'
import * as authActions from 'data/Auth/actions.js'

class LoginContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    const credentials = this.state.credentials

    switch (event.target.name) {
      case 'username':
        credentials.username = event.target.value
        break
      case 'password':
        credentials.password = event.target.value
        break
    }

    this.setState({ credentials: credentials })
  }

  onSubmit () {
    this.props.actions.loginStart(this.state.credentials)
  }

  render () {
    return (
      <Login onChange={this.onChange} onSubmit={this.onSubmit} />
    )
  }
}

function mapStateToProps (state) {
  return {
    credentials: state.credentials
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)