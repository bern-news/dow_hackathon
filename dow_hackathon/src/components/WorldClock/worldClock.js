import React, { Component } from 'react';
import Clock from '../Clock/clock';
import './style.css';

class WorldClock extends Component {

	render() {
		return (
            <div className="worldClock">
                <ul>
                    <li><Clock offset='5' name="New York"/></li>
                    <li><Clock offset='0' name="London"/></li>
                    <li><Clock offset='-1' name="Barcelona"/></li>
                    <li><Clock offset='-8' name="Hong Kong"/></li>
                    <li><span className="mdl-badge badge" data-badge="4" > TO DO</span> </li>
                </ul>

              
          
            </div>
		)
	}
}

export default WorldClock;