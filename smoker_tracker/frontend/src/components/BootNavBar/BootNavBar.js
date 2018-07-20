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
		</div>
		<div className="nav-item">
			<button 
				className="btn btn-primary nav-link" 
				onClick={props.loginClick}>
				Login
			</button>
			<button 
				className="btn btn-danger nav-link" 
				onClick={props.logoutClick}>
				Log Out
			</button>
			<button 
				className="btn btn-danger nav-link" 
				onClick={props.registerClick}>
				Register
			</button>
		</div>
	</div>

export default BootNavBar