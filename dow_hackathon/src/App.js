import React, { Component } from 'react';
import Calendar from './components/Calendar';
import dow_logo from './dow_logo.png';
import './App.css';
import Stream from "./components/Stream/stream";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={dow_logo} className="App-logo" alt="logo" />
        </header>
        <Calendar/>
        <Stream/>
      </div>
    );
  }
}

export default App;
