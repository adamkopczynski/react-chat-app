import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import { combineReducers, createStore } from 'redux'

import registerServiceWorker from './registerServiceWorker'
import messages from './reducers/messages'
import users from './reducers/users'
import {addUser} from './actions/chatActions'

const chat = combineReducers({
  messages,
  users
})

const store = createStore(chat)

store.dispatch(addUser('Me'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
