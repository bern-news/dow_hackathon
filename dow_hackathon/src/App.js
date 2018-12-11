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
        <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"> </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"> 
          <div className="CalendarContainer">
            <Calendar/>
            <Legend/>
          </div> 
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"></div>
        </div>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
