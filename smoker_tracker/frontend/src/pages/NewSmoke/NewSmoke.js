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
let newTime = "";

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
			headerCols: [],
			init: false,
		}

	}

	static getDerivedStateFromProps = (nextProps, prevState) => {
		if (!prevState.init) {
			const location = nextProps.location.state
			let headerCols = location.headerCols.concat(location.headerSmoker)
			return {
				init: true,
				info: {
					animal: location.animal ? location.animal : 'Not Entered',
					meatCut: location.meatCut ? location.meatCut : 'Not Entered',
					ogWeight: location.ogWeight ? location.ogWeight : 'Not Entered',
					trimWeight: location.trimWeight ? location.trimWeight : 'Not Entered',
					smoker: location.smoker ? location.smoker : 'Not Entered',
					// interval: location.interval ? location.interval : 'Not Entered',
					physDesc: location.physDesc ? location.physDesc : 'Not Entered',
					notes: location.notes ? location.notes : 'Not Entered'
				},
				startingTime: location.startingTime,
				headerCols: headerCols	
			}
		}

		return null
	}

	handleAdd = (event) => {
		// opens timepicker modal if "add" col,
		// just set states, which removes last col if "remove"
		this.setState({
			modal: !this.state.modal
		})
	}
	// if Remove button is clicked then sends "remove" to Table component and removes column
	handleRemove = (event) => {
		this.setState({
			addRemove: event.target.value
		})	
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
		newTime = start
	}

// for toggling the modal buttons
	toggle = (e) => {
		if (e.target.dataset.add) {
			this.setState({
				modal: !this.state.modal,
				addRemove: "add",
				timeToSend: newTime
			})
		} else {
			this.setState({
				modal: !this.state.modal
				// newTimeCol: ""
			})
		}
	}

	submitData = (tableState) => {
		console.log(tableState)
		// API.postNewTable()
	}

	blankAddRemove = () => {
		this.setState({
			addRemove: ""
		})
	}
	render() {
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
					timeToSend={this.state.timeToSend}
					submitData={this.submitData}
					headerCols={this.state.headerCols}
					blankAddRemove={this.blankAddRemove}
				/>

				<CustomButton in="Add" value="add" clickHandler={this.handleAdd} />
				{this.state.modal ? 
					<BootModal 
						modal={this.state.modal}
						value={true}
						toggle={this.toggle}
						handleTimeChange={this.handleTimeChange}
					/> : null}
				<CustomButton in="Remove" value="remove" clickHandler={this.handleRemove} />
			</div>
		)
	}
}

export default NewSmoke;