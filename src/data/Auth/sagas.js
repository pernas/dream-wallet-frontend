import { delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { prop, assoc } from 'ramda'

import * as walletActions from 'dream-wallet/lib/actions'
import { getWalletContext } from 'dream-wallet/lib/selectors'

import * as actions from './actions.js'
import { getSession } from './selectors'
import { api } from 'services/walletApi.js'

const pollingSaga = function * (session, n = 50) {
  if (n === 0) { return false }
  try {
    yield call(delay, 2000)
    let response = yield call(api.pollForSessioGUID, session)
    if (prop('guid', response)) { return true }
  } catch (error) {
    return false
  }
  return yield call(pollingSaga, session, n - 1)
}

const fetchWalletSaga = function * (guid, sharedKey, session, password) {
  try {
    let wallet = yield call(api.downloadWallet, guid, sharedKey, session, password)
    yield put(walletActions.loadWallet(wallet))
    yield put(walletActions.requestWalletData(getWalletContext(wallet).toJS()))
    yield put(actions.loginSuccess())
  } catch (error) {
    if (prop('authorization_required', error)) {
      let authorized = yield call(pollingSaga, session)
      if (authorized) {
        yield call(fetchWalletSaga, guid, undefined, session, password)
      }
    } else {
      yield put(actions.recordLog({ type: 'ERROR', message: 'Could not establish the session.' }))
    }
  }
}

const login = function * (action) {
  const credentials = action.payload
  // login with shared key
  if (credentials.sharedKey) {
    yield call(fetchWalletSaga, credentials.guid, credentials.sharedKey, undefined, credentials.password)
  } else {
    let session = yield select(getSession(credentials.guid))
    try {
      // if no shared key check for session
      session = yield call(api.establishSession, session)  // establishSession logic should not receive existent session as parameter
      yield put(actions.saveSession(assoc(credentials.guid, session, {})))
    } catch (error) {
      yield put(actions.recordLog({ type: 'ERROR', message: 'Could not establish the session.' }))
    }
    yield call(fetchWalletSaga, credentials.guid, undefined, session, credentials.password)
  }
}

export default {
  login: login
}
