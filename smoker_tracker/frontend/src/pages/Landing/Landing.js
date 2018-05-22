import React, {Component} from 'react';
import MiddleLanding from '../../components/MiddleLanding';
import {Button} from 'reactstrap';
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
				<MiddleLanding>
					<div>
					<h1>Track your barbecues, share with the world, and learn from others </h1>
					</div>
					<Button color="success" href="/newsmokeinfo">Get Started</Button>
				</MiddleLanding>
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