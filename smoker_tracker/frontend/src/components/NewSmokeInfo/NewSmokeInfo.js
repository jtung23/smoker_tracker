import React, {Component} from 'react';
// import CustomButton from '../CustomButton';

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimePicker from 'material-ui/TimePicker';

class NewSmokeInfo extends Component { 
	state = {
		title: "",
		animal: "",
		meatCut: "",
		ogWeight: "",
		trimWeight: "",
		smoker: "",
		startingTime: {},
		physDesc: "",
		notes: "",
		submit: false
	}

	handleFormChange= event => {
		const { name, value } = event.target;
		this.setState({
		  [name]: value
		});
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

		let start = hours + minutes
		start = parseInt(start)
		
		this.setState({
			startingTime: start
		})
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
							<option></option>
							<option value='1'>Weber Smokey Mountain</option>
						</Input>
					</FormGroup>
					<MuiThemeProvider>
						<FormGroup>
							<Label>Starting Time</Label>
							<TimePicker
					      format="24hr"
					      autoOk={true}
								name="startingTime"
								onChange={this.handleTimeChange}
								id="startingTime"
					    />
						</FormGroup>
  				</MuiThemeProvider>
					<FormGroup>
						<Label>Smoker</Label>
						<Input type="select" name="smoker" onChange={this.handleFormChange} value={this.state.smoker} id="smoker">
							<option></option>
							<option value='1'>Weber Smokey Mountain</option>
						</Input>
					</FormGroup>
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
					className="btn btn-primary"
					>
						newSmoke
					</Link>
					<Button color="danger" href="/">Cancel</Button>
				</Form>

			</div>
		)
	}

}

export default NewSmokeInfo;