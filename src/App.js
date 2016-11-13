import React, { Component } from 'react';
import { createStore } from 'redux'
import logo from './logo.svg';
import './App.css';

function smartroom(state = {
    preset: {
        name: 'Chill'
    }
}, action) {
  switch (action.type) {
  case 'START_PRESET':
    return state;
  case 'STOP_PRESET':
    return state;
  default:
    return state
  }
}

const SmartRoom = ({ store }) => {
    return (
      <div className="Preset">
        <p>{store.preset.name}</p>
      </div>
    );
}

let store = createStore(smartroom);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>SmartRoom</h2>
        </div>
        <SmartRoom
            store={store.getState()}
        />
      </div>
    );
  }
}

export default App;
