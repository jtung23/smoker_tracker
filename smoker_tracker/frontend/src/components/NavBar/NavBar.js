import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = props => 
	<nav className={`nav ${props.toggleTransparency}`}>
		<div className={`nav__logoText ${props.toggleClass}`}>
			<Link to="/">
				<i className="fas fa-home">Home</i>
			</Link>
		</div>
		<div className={`nav__toggle ${props.toggleColor} `}>
			<i 
			className="fas fa-bars"
			onClick={props.toggleButton}
			></i>
		</div>
		
		<div className="nav__button">
			<Link to="/sessionList">
				Session List
			</Link>
		</div>
		<div className="nav__button">
			<Link to="/profile">
				Profile
			</Link>
		</div>
		{props.logged_in ? 
			<div className={`nav__nav-btn ${props.toggleClass}`}>
				<button className="nav__welcome">
					{// declaring as button because only way it appears inline in navbar
					}
					Welcome {props.name}!
				</button>

				<button 
					className="nav__button"
					onClick={props.logoutClick}>
					Log Out
					<i className="fas fa-sign-out-alt fa-2x"></i>
				</button>
			</div>
			:
			<div className={`nav__nav-btn ${props.toggleClass}`}>
				<button 
					className="nav__button" 
					onClick={props.handleLoginRegBtnClick}
					value="reg" >
					Register
					<i className="fas fa-user-plus nav__icon"></i>
				</button>
				<button 
					className="nav__button"
					onClick={props.handleLoginRegBtnClick}
					value="login" >
					Login
					<i className="fas fa-sign-in-alt nav__icon"></i>
				</button>
			</div>
		}
	</nav>

export default NavBar