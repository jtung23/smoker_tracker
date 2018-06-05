import React from 'react';
import Background from '../../img/jumbotronmeat.jpg';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
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
			<Link className="btn btn-success" to="/newsmokeinfo">
				Get Started
			</Link>
		</div>
	</div>

export default Jumbotron;