import React, {Component, Fragment} from 'react';
import './style.css'

class OmniSearch extends Component {

	state = {
		results: []
	};

	handleOnChange = () => {

		const { results } = this.state;

		if (results.length === 0) {
			return this.setState({
				results: ['Document 1'],
			})
		}

		if (results.length === 1) {
            return this.setState({
                results: ['Document 1', 'Document 2'],
            })
		}

		return this.setState({
			results: []
		})
	};

	render() {

		const {
			results
		} = this.state;

		return (
			<Fragment>
				<input type="text" name="Search Anywhere" className="omniSearch" onChange={this.handleOnChange}/>
				<div className="results">
                    <ul>
                        <li>{results}</li>
                    </ul>
				</div>
			</Fragment>

		)
	}
}

export default OmniSearch;