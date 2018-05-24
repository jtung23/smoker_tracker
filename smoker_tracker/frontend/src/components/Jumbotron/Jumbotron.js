import React from 'react';
import Background from '../../img/jumbotronmeat.jpg';
import {Button} from 'reactstrap';

const style = {
	landing: {
		width: '100%',
		height: '100vh',
		backgroundImage: 'url('+Background+')',

	}
}

const check =(props) => {
	console.log(props.children)
	console.log(props.children.props.className)
}
const Jumbotron = props => 
	<div className="jumbotron">
		<div className="container">
			<h1 className="jumbotron__h1">Track your barbecues,<br />
				share with the world,<br />
				and learn from others 
			</h1>
			<Button color="success" href="/newsmokeinfo">Get Started</Button>
		</div>
	</div>

export default Jumbotron;