import React, { Component } from 'react';

class Clock extends Component {
	
	constructor(props) {
		super(props)
		this.offset = props.offset

		this.state = {
			time: new Date(new Date().getTime() - 1000*60*60*this.offset)
		}	
	}
	
	componentDidMount() {
		setInterval(this.update, 1000)
	}
	
	update = () => {
		this.setState({
			time: new Date(new Date().getTime() - 1000*60*60*this.offset)
		})
	};
	
	render() {
		const h = this.state.time.getHours()
		const m = this.state.time.getMinutes()
		const s = this.state.time.getSeconds()
		
		return (
			<div>
				<p className="clock-name">{this.props.name}</p>
				<p className="clock-time">{h % 12}:{(m < 10 ? '0' + m : m)}{h < 12 ? 'am' : 'pm'}</p>
			</div>
		)
	}
}

export default Clock;