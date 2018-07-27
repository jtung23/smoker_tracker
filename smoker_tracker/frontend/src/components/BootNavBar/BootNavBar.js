import React from 'react';
import {Link} from 'react-router-dom';

const BootNavBar = props => 
	<nav className="nav">
		<div className="nav__logoText">
			<Link to="/">
				BBQ Tracker
			</Link>
		</div>
		{props.logged_in ? 
			<div className="nav__nav-btn">
				<h1>Hi {props.name}</h1>
				<button 
					className="nav__button"
					onClick={props.logoutClick}>
					Log Out
				</button>
			</div>
			:
			<div className="nav__nav-ul">
				<button 
					className="nav__button" 
					onClick={props.handleLoginRegBtnClick}
					value="reg" >
					Register
				</button>
				<button 
					className="nav__button"
					onClick={props.handleLoginRegBtnClick}
					value="login" >
					Login
				</button>
			</div>
		}
	</nav>

export default BootNavBar