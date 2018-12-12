import React, { Component } from 'react';

class Legend extends Component {
    render() {
        return (  
            <div className="legend">
                <ul>
                    <li>Social</li>
                    <li>Local</li>
                    <li>Holidays</li>
                    <li>Training</li>
                </ul>
            </div>
        )
    }
}

export default Legend;