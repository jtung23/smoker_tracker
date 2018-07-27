import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = props => 
	<nav className={`nav ${props.toggleTransparency}`}>
		<div className={`nav__logoText ${props.toggleClass}`}>
			<Link to="/">
				BBQ Tracker
			</Link>
		</div>
		<div className={`nav__toggle ${props.toggleColor} `}>
			<i 
			className="fas fa-bars"
			onClick={props.toggleButton}
			></i>
	  	</div>
		{props.logged_in ? 
			<div className={`nav__nav-btn ${props.toggleClass}`}>
				<h1>Hi {props.name}</h1>
				<button 
					className="nav__button"
					onClick={props.logoutClick}>
					Log Out
					<i class="fas fa-sign-out-alt fa-2x"></i>
				</button>
			</div>
			:
			<div className={`nav__nav-btn ${props.toggleClass}`}>
				<button 
					className="nav__button" 
					onClick={props.handleLoginRegBtnClick}
					value="reg" >
					Register
					<i class="fas fa-user-plus nav__icon"></i>
				</button>
				<button 
					className="nav__button"
					onClick={props.handleLoginRegBtnClick}
					value="login" >
					Login
					<i class="fas fa-sign-in-alt nav__icon"></i>
				</button>
			</div>
		}
	</nav>

export default NavBar