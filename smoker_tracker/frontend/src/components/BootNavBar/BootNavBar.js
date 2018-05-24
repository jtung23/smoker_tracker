import React from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
	} from 'reactstrap';

const BootNavBar = props => 
	<div className="navbar">
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