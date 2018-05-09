import React, {Component} from 'react';
// import CustomButton from '../CustomButton';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const style = { margin: 12, };

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
		headerCols: [{
			dataField: 'time',
			text: 'Time',
		}],
		
		submit: false
	}

	handleFormChange= event => {
		console.log(event.target)
		const { name, value } = event.target;
		// if WSM option is clicked
		if (name === "smoker" && value === "1") {
			this.setState({
				[name]: value,
				headerSmoker: [
					{
						dataField: 'vent1',
						text: 'Vent 1'
					},
					{
						dataField: 'vent2',
						text: 'Vent 2'
					},
					{
						dataField: 'vent3',
						text: 'Vent 3'
					}
				]
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
		console.log(hours, minutes)
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
			<div>
				<Form>
					<FormGroup>
						<Label>Title</Label>
						<Input type="text" name="title" placeholder="Title" onChange={this.handleFormChange} value={this.state.title} id="title" />
					</FormGroup>
					<FormGroup>
						<Label>Animal</Label>
						<Input type="select" name="animal" onChange={this.handleFormChange} value={this.state.animal} id="animal">
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
						<Input type="text" name="meatCut" onChange={this.handleFormChange} value={this.state.meatCut} id="meatCut" placeholder="ex. Brisket" />
					</FormGroup>
					<FormGroup>
						<Label>Initial Weight (lb)</Label>
						<Input type="number" name="ogWeight" onChange={this.handleFormChange} value={this.state.ogWeight} id="ogWeight" />
					</FormGroup>
					<FormGroup>
						<Label>Post-Trim Weight</Label>
						<Input type="number" name="trimWeight" onChange={this.handleFormChange} value={this.state.trimWeight} id="trimWeight" />
					</FormGroup>
					<FormGroup>
						<Label>Smoker</Label>
						<Input type="select" name="smoker" onChange={this.handleFormChange} value={this.state.smoker} id="smoker">
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
						id="startingTime"
					/>
					<RaisedButton label="Time" value={"time"} primary={true} onClick={this.raisedBtnClick} style={style} />
					<RaisedButton label="Internal Temp" value={"int_temp"} onClick={this.raisedBtnClick} style={style} />
					<RaisedButton label="Grill Temp" value={"grill_temp"} onClick={this.raisedBtnClick} style={style} />
					<FormGroup>
						<Label>Physical Description</Label>
						<Input type="textarea" name="physDesc" onChange={this.handleFormChange} value={this.state.physDesc} id="physDesc" placeholder="ex. Thick cap, uneven fat on flat..." />
					</FormGroup>
					<FormGroup>
						<Label>Notes</Label>
						<Input type="textarea" name="notes" onChange={this.handleFormChange} value={this.state.notes} id="notes" placeholder="ex. Cold day, ~50F. strong winds..." />
					</FormGroup>

					<Link to={{
					  pathname: '/newsmoke',
					  state: this.state
					}}
					className="btn btn-primary">
						newSmoke
					</Link>
					<Button color="danger" href="/">Cancel</Button>
				</Form>

			</div>
		)
	}

}

export default NewSmokeInfo;