import React from 'react';
import { Button,
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
	} from 'reactstrap';
	
const style= {
	headline: {
		fontFamily: "'Shrikhand', cursive",
		fontSize: '48px',
		color: 'blue'
	}
}


const BootNavBar = props => 
	<Navbar light expand="md">
		<NavbarBrand href ="/" style={style.headline} >Smoker Tracker</NavbarBrand>
		<Nav className="ml-auto" navbar>
			<NavItem>
				<NavLink href="/login" style={style.headline}>Login</NavLink>
			</NavItem>
		</Nav>
	</Navbar>

export default BootNavBar