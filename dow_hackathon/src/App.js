import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Stream from "./components/Stream";
import Custom from "./components/Custom";
import Legend from './components/Legend';
import Event from './components/EventFeed';
import dow_logo from './dlaunch.png';
import WorldClock from './components/WorldClock/worldClock';
import './App.css';
import './components/calendar.css'
import OmniSearch from './components/OmniSearch';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="dj-trending-header">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"><img src={dow_logo} className="App-logo" alt="logo" /></div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"></div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"><OmniSearch/></div>
          </div>
        </header>
        <WorldClock className="worldClock"/>
        <div className="dj-trending-body">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"> <Event /></div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet">
            <div className="CalendarContainer">
                <Calendar/>
                <Legend/>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet">
                <Stream/>
                <Custom />
            </div>
          </div>
        </div>
        <div>
        <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
