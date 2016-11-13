import React from 'react';
// import Footer from './Footer';
// import Stopwatch from '../Stopwatch';
import PresetList from '../containers/PresetList';
import '../App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h2>SmartRoom</h2>
      <img src="/logo.png"
      className="App-logo" alt="logo" />
    </div>
    <div className="row">
      <div className="col-md-6 col-centered">
        <PresetList />
      </div>
    </div>
  </div>
)

export default App
