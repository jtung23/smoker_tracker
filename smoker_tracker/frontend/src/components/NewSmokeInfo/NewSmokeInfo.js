import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';
import CustomButton from '../CustomButton';

class NewSmokeInfo extends Component { 
	state = {
		title: "",
		animal: "",
		meatCut: "",
		ogWeight: "",
		trimWeight: "",
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
						<Label>Physical Description</Label>
						<Input type="textarea" name="physDesc" onChange={this.handleFormChange} value={this.state.physDesc} id="physDesc" placeholder="ex. Thick cap, uneven fat on flat..." />
					</FormGroup>
					<FormGroup>
						<Label>Notes</Label>
						<Input type="textarea" name="notes" onChange={this.handleFormChange} value={this.state.notes} id="notes" placeholder="ex. Cold day, ~50F. strong winds..." />
					</FormGroup>
						<CustomButton>
							<Link to={{
								pathname: '/newsmoke',
								state: this.state
							}}>
								Submit
							</Link>
						</CustomButton>
					<Button color="danger" href="/">Cancel</Button>
				</Form>

			</div>
		)
	}

}

export default NewSmokeInfo;