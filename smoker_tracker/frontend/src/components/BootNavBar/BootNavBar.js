import React from 'react';
import {Link} from 'react-router-dom';

const BootNavBar = props => 
	<div className="navbar">
		<Link className="navbar-brand" to="/">
			Smoker Tracker
		</Link>
		<div className="nav-item my-2 my-lg-0">
			<Link classname="nav-link" to="/searchresults">
				Search
			</Link>
			<Link className="nav-link" to="/login">
				Login
			</Link>
		</div>
	</div>

export default BootNavBar