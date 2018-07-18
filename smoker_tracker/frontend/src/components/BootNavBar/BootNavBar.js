import React from 'react';
import {Link} from 'react-router-dom';

const BootNavBar = props => 
	<div className="navbar">
		<Link className="navbar-brand" to="/">
			Smoker Tracker
		</Link>
		<div className="nav-item">
			<form className="form-inline">
				<input className="form-control mr-sm-2 search-input" type="search" />
				<Link className="btn btn-outline-success my-2 my-sm-0" to="/searchresults">
					Search
				</Link>
			</form>
			<button onClick={props.loginClick}>GO!</button>
			<Link className="nav-link" to="/login">
				Login
			</Link>
		</div>
	</div>

export default BootNavBar