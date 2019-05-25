import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CharacterContainer from './containers/CharacterContainer'
// import CharacterContainer2 from './containers/CharacterContainer/withoutRedux'
import store from './redux/store'
import { Provider } from 'react-redux'

const ToRender = () => (
  <Provider store={store}>
    <CharacterContainer />
  </Provider>
)

ReactDOM.render(<ToRender />, document.getElementById('root'));
