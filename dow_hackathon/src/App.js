import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Event from './components/EventFeed';
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
        <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"> <Event /></div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"> <Calendar/> </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"> <Stream/></div>
        </div>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
