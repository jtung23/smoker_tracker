import React from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
	} from 'reactstrap';
	
const style= {
	headline: {
		fontFamily: "'Shrikhand', cursive",
		fontSize: '36px',
		color: 'blue',
		width: '20%'
	},

}


const BootNavBar = props => 
	<div className="navbar customNavBar">
		<a href ="/" className="navbar-brand">
			Smoker Tracker
		</a>
		<div className="nav-item my-2 my-lg-0">
			<a className="nav-link" href="/login">
				Login
			</a>
		</div>
	</div>

export default BootNavBar