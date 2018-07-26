import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron';
import background from '../../img/jumbotronmeat.jpg'

class Landing extends Component {

	render() {
		return (
			<div className="landing__body" >
				<div className="landing--bkg"></div>
				<Jumbotron />

			</div>
		)
	}
}

export default Landing;