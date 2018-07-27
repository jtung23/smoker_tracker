import React from 'react';
// import Background from '../../img/jumbotronmeat.jpg';
import {Link} from 'react-router-dom';

const Jumbotron = props => 
	<div className="jumbotron__div">
		<div className="jumbotron__div__text">
			<h1 className="jumbotron__div__h1">
				BBQ Tracker
			</h1>
			<h2 className="jumbotron__div__h2" >
				Track, Share, Learn
			</h2>
			<Link className="btn btn-success jumbotron__div__btn" to="/newsmoke">
				Get Started
			</Link>
		</div>
	</div>

export default Jumbotron;