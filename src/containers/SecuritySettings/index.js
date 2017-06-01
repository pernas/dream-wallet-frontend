import React from 'react'
import SecuritySettings from 'components/SecuritySettings'

class SecuritySettingsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { advanced: false }
  }

  render () {
    let { advanced } = this.state
    let toggleAdvanced = () => this.setState({ advanced: !advanced })
    return (
      <SecuritySettings advanced={advanced} toggleAdvanced={toggleAdvanced} />
    )
  }
}

export default SecuritySettingsContainer
