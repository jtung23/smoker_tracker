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
		<button onClick={props.handleClose}> GO </button>
		<div className="nav-item">
			 
			{props.logged_in ? 
				<div>
					<h1>`Hi ${props.username}` </h1>
					<button 
						className="btn btn-danger nav-link" 
						onClick={props.logoutClick}>
						Log Out
					</button> 
				</div>
				: 	
				<div>		
					<button 
						className="btn btn-primary nav-link" 
						onClick={props.handleLoginRegBtnClick}
						value="login">
						Login
					</button>
					<button 
						className="btn btn-danger nav-link" 
						onClick={props.handleLoginRegBtnClick}
						value="reg">
						Register
					</button>
				</div>
			} 

		</div>
	</div>

export default BootNavBar