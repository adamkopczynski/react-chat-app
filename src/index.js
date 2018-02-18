import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { combineReducers } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import messages from './reducers/messages';
import users from './reducers/users';

const store  = combineReducers({
  messages,
  users
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
