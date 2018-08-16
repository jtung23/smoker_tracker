import React, {Component} from 'react';
import "./newSmokeInfo.css";
// import CustomButton from '../CustomButton';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import TimePicker from 'material-ui/TimePicker';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const style = { 
	button: {
		margin: 12, 
	},
	inputWeight: {
		width: '25%',
		display: 'inlineBlock',
	},
	timePicker: {
		background: '#e2e2e2',
		width:'25%'
	}
}

const wsmCols = [
	{
		accessor: 'vent1',
		Header: 'Vent 1'
	},
	{
		accessor: 'vent2',
		Header: 'Vent 2'
	},
	{
		accessor: 'vent3',
		Header: 'Vent 3'
	}
]
const mainCols = [{
		accessor: 'time',
		Header: 'Time',
	},
	{
		accessor: 'int_temp',
		Header: 'Internal Temp',
	},
	{
		accessor: 'grill_temp',
		Header: 'Grill Temp',
	}
]
// for bootstrap react table /////////////////////////////
// const wsmCols = [
// 	{
// 		dataField: 'vent1',
// 		text: 'Vent 1'
// 	},
// 	{
// 		dataField: 'vent2',
// 		text: 'Vent 2'
// 	},
// 	{
// 		dataField: 'vent3',
// 		text: 'Vent 3'
// 	}
// ]
// const mainCols = [{
// 		dataField: 'time',
// 		text: 'Time',
// 	},
// 	{
// 		dataField: 'int_temp',
// 		text: 'Internal Temp',
// 	},
// 	{
// 		dataField: 'grill_temp',
// 		text: 'Grill Temp',
// 	}
// ]
// //////////////////////////////////////////////////

class NewSmokeInfo extends Component { 
	state = {
		title: "",
		animal: "",
		meatCut: "",
		ogWeight: "",
		trimWeight: "",
		smoker: "",
		headerSmoker: [],
		startingTime: {},
		interval: "",
		physDesc: "",
		notes: "",
		headerCols: mainCols,
		submit: false
	}

	handleFormChange= event => {
		const { name, value } = event.target;
		// if WSM option is clicked
		if (name === "smoker" && value === "1") {
			this.setState({
				[name]: value,
				headerSmoker: wsmCols
			})
		} else if (value === 'no smoker') {
			this.setState({
				[name]: value,
				headerSmoker: []
			})
		} else {
			this.setState({
				[name]: value
			  });
		}

	}

	handleTimeChange = (a, date) => {
		let hours = date.getHours().toString()
		let minutes = date.getMinutes().toString()
		if (hours < 10) {
			hours = "0" + hours
		}
		if (minutes < 10) {
			minutes = "0" + minutes
		}
		let start = hours + ":" + minutes

		this.setState({
			startingTime: start
		})
	}

	handleChange = (event, index, value) => 
		this.setState({interval: value});

	raisedBtnClick = (e) => {
		console.log(e.target.value)
		console.log(e.target.textContent)
	}	

	submitForm = (e)=> {
		e.preventDefault()
		console.log(this.state)
	}


	render() {
		return (
			<div className="main-body">
				<Form>
					<FormGroup>
						<Label>Title</Label>
						<Input 
							type="text"
							name="title"
							placeholder="Title"
							onChange={this.handleFormChange}
							value={this.state.title}
							className="title newSmoke__input"
						/>
					</FormGroup>
					<FormGroup>
						<Label>Animal</Label>
						<Input
							type="select"
							name="animal"
							onChange={this.handleFormChange}
							value={this.state.animal}
							className="animal"
							>
							<option></option>
							<option>Cow</option>
							<option>Pig</option>
							<option>Chicken</option>
							<option>Lamb</option>
							<option>Turkey</option>
							<option>Goat</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label>Cut</Label>
						<Input
							type="text"
							name="meatCut"
							onChange={this.handleFormChange}
							value={this.state.meatCut}
							className="meatCut newSmoke__input"
							placeholder="ex. Brisket"
						/>
					</FormGroup>
					<FormGroup style={style.inputWeight} >
						<Label>Initial Weight (lb)</Label>
						<Input
							type="number"
							name="ogWeight"
							onChange={this.handleFormChange}
							value={this.state.ogWeight}
							className="ogWeight" 
						/>
					</FormGroup>
					<FormGroup style={style.inputWeight} >
						<Label>Post-Trim Weight</Label>
						<Input 
							type="number"
							name="trimWeight"
							onChange={this.handleFormChange}
							value={this.state.trimWeight}
							className="trimWeight" 
						/>
					</FormGroup>
					<FormGroup>
						<Label>Smoker</Label>
						<Input 
							type="select"
							name="smoker"
							onChange={this.handleFormChange}
							value={this.state.smoker}
							className="smoker newSmoke__input"
						>
							<option value='no smoker'></option>
							<option value='1'>Weber Smokey Mountain</option>
						</Input>
					</FormGroup>
					<Label>Starting Time</Label>
					<TimePicker
						format="24hr"
						autoOk={true}
						name="startingTime"
						onChange={this.handleTimeChange}
						className="startingTime"
						style={style.timePicker}
					/>
					<RaisedButton label="Time" value={"time"} primary={true} onClick={this.raisedBtnClick} style={style.button} />
					<RaisedButton label="Internal Temp" value={"int_temp"} onClick={this.raisedBtnClick} style={style.button} />
					<RaisedButton label="Grill Temp" value={"grill_temp"} onClick={this.raisedBtnClick} style={style.button} />
					<FormGroup>
						<Label>Physical Description</Label>
						<Input
							type="textarea"
							name="physDesc"
							onChange={this.handleFormChange}
							value={this.state.physDesc}
							className="physDesc newSmoke__input"
							placeholder="ex. Thick cap, uneven fat on flat..."
						/>
					</FormGroup>
					<FormGroup>
						<Label>Notes</Label>
						<Input 
							type="textarea"
							name="notes"
							onChange={this.handleFormChange}
							value={this.state.notes}
							className="notes newSmoke__input"
							placeholder="ex. Cold day, ~50F. strong winds..."
						/>
					</FormGroup>

					<Link to={{
					  pathname: '/newsmoke',
					  state: this.state
					}}
					className="btn btn-primary">
						newSmoke
					</Link>
					<Link className="btn btn-danger" to="/">
						Cancel
					</Link>
				</Form>

			</div>
		)
	}

}

export default NewSmokeInfo;