import React, { Component } from 'react';
import './styles/styles.css';

import NewMessage from './components/NewMessage';
import Messages from './components/Messages';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Sidebar />
        <main className="messages-container">
            <Messages />
            <NewMessage />
        </main>
      </div>
    );
  }
}

export default App;
