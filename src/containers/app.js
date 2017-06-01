import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import WalletLayout from 'components/Layouts/WalletLayout'
import PublicLayout from 'components/Layouts/PublicLayout'
import LandingContainer from 'containers/Landing'
import LoginContainer from 'containers/Login'
import RegisterContainer from 'containers/Register'
import HomeContainer from 'containers/Home'
import TransactionsContainer from 'containers/Transactions'
import BuyContainer from 'containers/Buy'
import SecurityContainer from 'containers/Security'
import InfoContainer from 'containers/Info'
import PreferencesContainer from 'containers/Preferences'
import SecuritySettingsContainer from 'containers/SecuritySettings'
import AddressesContainer from 'containers/Addresses'
import FaqContainer from 'containers/Faq'

import { Provider } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Switch>
            <WalletLayout exact path='/' component={HomeContainer} />
            <WalletLayout path='/transactions' component={TransactionsContainer} />
            <WalletLayout path='/buy-sell' component={BuyContainer} />
            <WalletLayout path='/security-center' component={SecurityContainer} />
            <WalletLayout path='/settings/info' component={InfoContainer} />
            <WalletLayout path='/settings/preferences' component={PreferencesContainer} />
            <WalletLayout path='/settings/security' component={SecuritySettingsContainer} />
            <WalletLayout path='/settings/addresses' component={AddressesContainer} />
            <WalletLayout path='/faq' component={FaqContainer} />
            <PublicLayout path='/landing' component={LandingContainer} />
            <PublicLayout path='/login' component={LoginContainer} />
            <PublicLayout path='/register' component={RegisterContainer} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
