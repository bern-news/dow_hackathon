import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Legend from './components/Legend';
import dow_logo from './dow_logo.png';
import './App.css';
import './components/calendar.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={dow_logo} className="App-logo" alt="logo" />
        </header>
        <div className="CalendarContainer">
          <Calendar/>
          <Legend/>
        </div>
      </div>
    );
  }
}

export default App;
