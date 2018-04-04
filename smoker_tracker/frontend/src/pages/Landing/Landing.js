import React, {Component} from 'react';
import Background from '../../img/jumbotronmeat.jpg';
import MiddleLanding from '../../components/MiddleLanding';
import {Button} from 'reactstrap';
const style = {
	landing: {
		width: '100%',
		height: '100vh',
	}
}
class Landing extends Component {

	render() {
		return (
			<div style={style.landing}>
				<MiddleLanding>
					<h1> Hello Hello </h1>
					<Button color="success" href="/newsmokeinfo">New Smoke</Button>
				</MiddleLanding>

			</div>
		)
	}
}

export default Landing;