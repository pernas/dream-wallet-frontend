// Polyfill
import 'babel-polyfill'

// Internal resources
import './index.scss'

// Import fonts
import 'fonts/montserrat/Montserrat-Thin.eot'
import 'fonts/montserrat/Montserrat-Thin.otf'
import 'fonts/montserrat/Montserrat-Thin.ttf'
import 'fonts/montserrat/Montserrat-ExtraLight.eot'
import 'fonts/montserrat/Montserrat-ExtraLight.otf'
import 'fonts/montserrat/Montserrat-ExtraLight.ttf'
import 'fonts/montserrat/Montserrat-Light.eot'
import 'fonts/montserrat/Montserrat-Light.otf'
import 'fonts/montserrat/Montserrat-Light.ttf'
import 'fonts/montserrat/Montserrat-Medium.eot'
import 'fonts/montserrat/Montserrat-Medium.otf'
import 'fonts/montserrat/Montserrat-Medium.ttf'
import 'fonts/montserrat/Montserrat-Regular.eot'
import 'fonts/montserrat/Montserrat-Regular.otf'
import 'fonts/montserrat/Montserrat-Regular.ttf'
import 'fonts/montserrat/Montserrat-SemiBold.eot'
import 'fonts/montserrat/Montserrat-SemiBold.otf'
import 'fonts/montserrat/Montserrat-SemiBold.ttf'
import 'fonts/montserrat/Montserrat-Bold.eot'
import 'fonts/montserrat/Montserrat-Bold.otf'
import 'fonts/montserrat/Montserrat-Bold.ttf'
import 'fonts/montserrat/Montserrat-ExtraBold.eot'
import 'fonts/montserrat/Montserrat-ExtraBold.otf'
import 'fonts/montserrat/Montserrat-ExtraBold.ttf'
import 'fonts/montserrat/Montserrat-Black.eot'
import 'fonts/montserrat/Montserrat-Black.otf'
import 'fonts/montserrat/Montserrat-Black.ttf'
import 'fonts/gillsans/GillSans-Bold.eot'
import 'fonts/gillsans/GillSans-Bold.ttf'
import 'fonts/gillsans/GillSans-Light.eot'
import 'fonts/gillsans/GillSans-Light.ttf'
import 'fonts/gillsans/GillSans-Regular.eot'
import 'fonts/gillsans/GillSans-Regular.ttf'
import 'fonts/gillsans/GillSans-SemiBold.eot'
import 'fonts/gillsans/GillSans-SemiBold.ttf'
import 'fonts/gillsans/GillSans-UltraBold.eot'
import 'fonts/gillsans/GillSans-UltraBold.ttf'
import 'fonts/icomoon/icomoon.eot'
import 'fonts/icomoon/icomoon.ttf'
import 'fonts/icomoon/icomoon.woff'
import 'fonts/themify/themify.eot'
import 'fonts/themify/themify.ttf'
import 'fonts/themify/themify.woff'

// Import React & JS
import React from 'react'
import ReactDOM from 'react-dom'
import App from './scenes/app.js'
import configureStore from './store/configureStore.dev'

const store = configureStore()

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
)
