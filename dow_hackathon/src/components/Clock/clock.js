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
				<h1>{this.props.name}</h1>
				<h1>{h % 12}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)} {h < 12 ? 'am' : 'pm'}</h1>
			</div>
		)
	}
}

export default Clock;