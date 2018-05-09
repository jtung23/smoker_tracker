import React, {Component} from 'react';
import InfoBox from '../../components/InfoBox';
// import HeaderCol from '../../components/HeaderCol';
import Table from '../../components/Table';
// import CustomButton from '../../components/CustomButton';
import {Link} from "react-router-dom";
import CustomButton from '../../components/CustomButton';
import BootModal from '../../components/BootModal';
import API from '../../utils/API.js';

const style = {
	background: '#a5f3ff'
}
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
				interval: '',
				physDesc: '',
				notes: ''
			},
			startingTime: '',
			addRemove: "",
			modal: false,
			newTime: "",
			newTimeCol: "",
			headerCols: []
		}

	}

	componentWillMount =()=>{
		const location = this.props.location.state

		this.setState({
			info: {
				animal: location.animal ? location.animal : 'Not Entered',
				meatCut: location.meatCut ? location.meatCut : 'Not Entered',
				ogWeight: location.ogWeight ? location.ogWeight : 'Not Entered',
				trimWeight: location.trimWeight ? location.trimWeight : 'Not Entered',
				smoker: location.smoker ? location.smoker : 'Not Entered',
				interval: location.interval ? location.interval : 'Not Entered',
				physDesc: location.physDesc ? location.physDesc : 'Not Entered',
				notes: location.notes ? location.notes : 'Not Entered'
			},
			startingTime: location.startingTime
		})
	}

	handleAddRemove = (event) => {
		console.log('clicked')
		const value = event.target.value
		// opens timepicker modal if "add" col,
		// just set states, which removes last col if "remove"
		if (value === "add") {
			// this.toggle(true)
			this.setState({
			// 	addRemove: value,
				modal: !this.state.modal
			})	
		} else {
			this.setState({
				addRemove: value
			})				
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
			newTime: start
		})
	}
// for toggling the modal buttons
	toggle = (bool) => {
		if (bool) {
			this.setState({
				modal: !this.state.modal,
				newTimeCol: this.state.newTime,
				addRemove: "add"
			})
		} else {
			this.setState({
				modal: !this.state.modal,
				addRemove: "nothing"
			})
		}
	}

	submitData = (tableState) => {
		console.log(tableState)
		// API.postNewTable()
	}

	render() {
		console.log(this.state)
		return (
			<div style={style} >
				<h1>{this.state.info.title ? this.state.info.title : 'No Title'}</h1>
				<Link to="/newsmokeinfo" className="btn btn-primary">Back</Link>
				<InfoBox 
					animal={this.state.info.animal}
					meatCut={this.state.info.meatCut}
					ogWeight={this.state.info.ogWeight}
					trimWeight={this.state.info.trimWeight}
					smoker={this.state.info.smoker}
					physDesc={this.state.info.physDesc}
					notes={this.state.info.notes}
				/>
				<Table 
					typeOfSmoker={this.state.info.smoker}
					startingTime={this.state.startingTime}
 					addRemoveCol={this.state.addRemove}
					newTime={this.state.newTimeCol}
					submitData={this.submitData}
					headerCols={this.state.headerCols}
				/>

				<CustomButton in="Add" value="add" clickHandler={this.handleAddRemove} />
				{this.state.modal ? 
					<BootModal 
						modal={this.state.modal}
						toggle={this.toggle}
						handleTimeChange={this.handleTimeChange}
					/> : null}
				<CustomButton in="Remove" value="remove" clickHandler={this.handleAddRemove} />
			</div>
		)
	}
}

export default NewSmoke;