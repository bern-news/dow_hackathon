import React, {Component} from 'react';
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
import Footer from "./components/NewStarters";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="dj-trending-header">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"><img src={dow_logo} className="App-logo" alt="logo" /></div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet" />
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"><OmniSearch/></div>
          </div>
        </header>
        <section>
        <WorldClock className="worldClock"/>

      
        </section>
     
        <div className="dj-trending-body">
        <div className="mask" />
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet"> <Event />
            </div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet">
            <div className="CalendarContainer">
                <Calendar/>
                <Legend/>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet">
                <Stream/>
            </div>
          </div>
          <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet">
                <Footer/>
            </div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet">
                <Custom />
            </div>
          </div>
        </div>
      </div>
    );
  }
}





export default App;
