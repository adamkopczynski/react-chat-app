import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import registerServiceWorker from './registerServiceWorker'
import messages from './reducers/messages'
import users from './reducers/users'
import handleNewMessage from './saga'
import setupSocket from './setupSocket'
import username from './names'

const sagaMiddleware = createSagaMiddleware()

const chat = combineReducers({
  messages,
  users
})


const store = createStore(
  chat,
  applyMiddleware(sagaMiddleware)
)

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket, username})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
