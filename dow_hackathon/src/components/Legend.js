import React, { Component } from 'react';

class Legend extends Component {
    render() {
        return (  
            <div className="legend">
                <ul>
                    <li>Social Events</li>
                    <li>Local Events</li>
                    <li>Global Holidays</li>
                    <li>Training Events</li>
                </ul>
            </div>
        )
    }
}

export default Legend;