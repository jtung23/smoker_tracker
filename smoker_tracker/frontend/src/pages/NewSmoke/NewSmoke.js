import React, {Component} from 'react';
import InfoBox from '../../components/InfoBox';
import CustomButton from '../../components/CustomButton';

class NewSmoke extends Component {
	constructor(props) {
		super(props);
		this.state= {
			info: this.props.location.state
		}
	}

	componentDidMount() {
		console.log(this)
		console.log(this.props.location.state)
		console.log(this.state.info)
	}
	render() {
		return (
			<div>
				<h1>{this.state.info.title}</h1>
				<CustomButton link="/newsmokeinfo" text="Back" />
				<InfoBox />
			</div>
		)
	}
}

export default NewSmoke;