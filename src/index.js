import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRouter from './components/AppRouter'
import store from './redux/store'
import { Provider } from 'react-redux'

const ToRender = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<ToRender />, document.getElementById('root'));
