import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron';

const style = {
	body: {
		width: '100%',
		height: '100%',
	}
}
class Landing extends Component {

	render() {
		return (
			<div style={style.body} >
				<Jumbotron />
				<div className="container">
					<div className="row justify-content-center allCards">
						<div className="col-md-3 allCards__card">
							<div className="card__image">
								<img src="http://via.placeholder.com/200x200"/>
							</div>
							<div className="card__text">
								<p>Hello</p>
							</div>
						</div>
						<div className="col-md-3 allCards__card allCards__card--margin">
							<div className="card__image">
								<img src="http://via.placeholder.com/200x200"/>
							</div>
							<div className="card__text">
								<p>Hello</p>
							</div>
						</div>
						<div className="col-md-3 allCards__card">
							<div className="card__image">
								<img src="http://via.placeholder.com/200x200"/>
							</div>
							<div className="card__text">
								<p>Hello</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Landing;