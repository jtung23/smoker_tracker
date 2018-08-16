import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron';
// import background from '../../img/jumbotronmeat.jpg'
import {Link} from 'react-router-dom';

class Landing extends Component {

	render() {
		return (
			<div className="landing__body" >
				<div className="landing__div" >
					<Jumbotron />
					<div className="landing__divBtn" >
						<Link className="landing__div--btn" to="/newsmoke">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Landing;