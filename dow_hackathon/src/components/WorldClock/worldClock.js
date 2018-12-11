import React, { Component } from 'react';
import Clock from '../Clock/clock';

class WorldClock extends Component {

	render() {
		return (
            <div>
                <Clock offset='-5' name="New York"/>
                <Clock offset='0' name="London"/>
                <Clock offset='1' name="Barcelona"/>
                <Clock offset='8' name="Hong Kong"/>
            </div>
		)
	}
}

export default WorldClock;