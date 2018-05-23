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
	nav: {
		borderBottom: '4px solid gray',
		boxShadow: 'inset 0px 0px 10px rgba(0,0,0,0.3)'
	}
}


const BootNavBar = props => 
	<Navbar light expand="md" style={style.nav}>
		<NavbarBrand href ="/" style={style.headline} >Smoker Tracker</NavbarBrand>
		<Nav className="ml-auto" navbar>
			<NavItem>
				<NavLink href="/login">Login</NavLink>
			</NavItem>
		</Nav>
	</Navbar>

export default BootNavBar