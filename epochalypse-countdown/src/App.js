import React from 'react';
import logo from './logo.svg';
import face from './face.png';
import './App.css';
import Countdown from './Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={face} className="App-face" alt="clock-face" />
      </header>
      <Countdown />
    </div>
  );
}

export default App;
