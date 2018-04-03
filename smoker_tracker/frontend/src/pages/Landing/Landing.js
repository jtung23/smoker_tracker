import React, {Component} from 'react';
import { Button,Navbar,NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Background from '../../img/jumbotronmeat.jpg';
import MiddleLanding from '../../components/MiddleLanding';

const style = {
	jumbotron: {
		backgroundImage: 'url('+Background+')',
		width: '100%',
		height: '100vh',
	},
	headline: {
		fontFamily: "'Shrikhand', cursive",
		fontSize: '48px',
		color: 'blue'
	}
}
class Landing extends Component {

	render() {
		return (
			<div style={style.jumbotron}>
				<Navbar light expand="md">
					<NavbarBrand style={style.headline} >Smoker Tracker</NavbarBrand>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/login" style={style.headline}>Login</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
				<MiddleLanding>
					<h1> Hello Hello </h1>
					<Button color="success">New Smoke</Button>
				</MiddleLanding>

			</div>
		)
	}
}

export default Landing;