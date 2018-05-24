import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron';

const style = {
	body: {
		width: '100%',
		height: '100%',
	}
}
class Landing extends Component {

	render() {
		return (
			<div style={style.body} >
				<Jumbotron />
				<div>
					<h1>
						second part
					</h1>
				</div>
			</div>
		)
	}
}

export default Landing;