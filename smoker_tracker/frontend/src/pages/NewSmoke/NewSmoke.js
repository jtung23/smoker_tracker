import React, {Component} from 'react';
import InfoBox from '../../components/InfoBox';
// import HeaderCol from '../../components/HeaderCol';
import Table from '../../components/Table';
// import CustomButton from '../../components/CustomButton';
import {Link} from "react-router-dom";
class NewSmoke extends Component {
	constructor(props) {
		super(props);
		this.state= {
			info: {
				animal: '',
				meatCut: '',
				ogWeight: '',
				trimWeight: '',
				smoker: '',
				startingTime: '',
				physDesc: '',
				notes: ''
			}

		}
	}

	componentWillMount() {
		this.setState({
			info: {
				animal: this.props.location.state.animal,
				meatCut: this.props.location.state.meatCut,
				ogWeight: this.props.location.state.ogWeight,
				trimWeight: this.props.location.state.trimWeight,
				smoker: this.props.location.state.smoker,
				startingTime: this.props.location.state.startingTime,
				physDesc: this.props.location.state.physDesc,
				notes: this.props.location.state.notes

			}
		})
		console.log(this.state)
		console.log(this.props)
	}

	returnWSMColHeader = () => {
		return (
			<tbody>
				<tr>
					<th>
						Vent 1
					</th>
				</tr>
				<tr>
					<th>
						Vent 2
					</th>
				</tr>
				<tr>
					<th>
						Vent 3
					</th>
				</tr>
			</tbody>
		)
	}

	somethingElse = () =>
		<tbody>
			<tr>
				Nothing
			</tr>
		</tbody>

	render() {
		return (
			<div>
				<h1>{this.state.info.title ? this.state.info.title : 'Not Entered'}</h1>
				<Link to="/newsmokeinfo" className="btn btn-primary">Back</Link>
				<InfoBox 
					animal={this.state.info.animal ? this.state.info.animal : 'Not Entered'}
					meatCut={this.state.info.meatCut ? this.state.info.meatCut : 'Not Entered'}
					ogWeight={this.state.info.ogWeight ? this.state.info.ogWeight : 'Not Entered'}
					trimWeight={this.state.info.trimWeight ? this.state.info.trimWeight : 'Not Entered'}
					smoker={this.state.info.smoker ? this.state.info.smoker : 'Not Entered'}
					physDesc={this.state.info.physDesc ? this.state.info.physDesc : 'Not Entered'}
					notes={this.state.info.notes ? this.state.info.notes : 'Not Entered'}
				/>
				<Table typeOfSmoker={this.state.info.smoker} >
					{(this.state.info.smoker === "1") ? this.returnWSMColHeader() : this.somethingElse()}
				</Table>
			</div>
		)
	}
}

export default NewSmoke;