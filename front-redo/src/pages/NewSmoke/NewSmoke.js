import React, {Component} from 'react';
// import InfoBox from '../../components/InfoBox';
// import HeaderCol from '../../components/HeaderCol';
import DataGrid from '../../components/DataGrid';
// import CustomButton from '../../components/CustomButton';
import {Link} from "react-router-dom";
import CustomButton from '../../components/CustomButton';
import BootModal from '../../components/BootModal';
import API from '../../utils/API.js';
import ReactDataGrid from 'react-data-grid';
import update from 'immutability-helper';

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
			columns: [
				{
				  key: 'id',
				  name: 'ID',
				  width: 80
				},
				{
				  key: 'time',
				  name: 'Time (HhMm)',
				  editable: true
				},
				{
				  key: 'internalTemp',
				  name: 'Internal Temp (F)',
				  editable: true
				},
				{
				  key: 'grillTemp',
				  name: 'Grill Temp (F)',
				  editable: true
				}
			  ],
			rows: this.createRows(10)
		}

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
	// setting addRemove state to blank from 
	// componentDidUpdate in Table.js
	blankAddRemove = () => {
		this.setState({
			addRemove: ""
		})
	}
	// handling when a new time is picked in the modal
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

	// for toggling when the modal "Create" or "Cancel" buttons
	// are clicked
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

	getRandomDate = (start, end) => {
		return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
	};
	
	createRows = (numberOfRows) => {
		let rows = [];
		for (let i = 1; i < numberOfRows; i++) {
			rows.push({
			id: i,
			// time: "",
			// internalTemp: "",
			// grillTemp: ""
			});
		}
		return rows;
	};
	
	rowGetter = (i) => {
		return this.state.rows[i];
	};
	
	handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
		let rows = this.state.rows.slice();

		for (let i = fromRow; i <= toRow; i++) {
			let rowToUpdate = rows[i];
			let updatedRow = update(rowToUpdate, {$merge: updated});
			rows[i] = updatedRow;
		}

		this.setState({ rows });
	};

	submitData = (tableState) => {
		console.log('newSmoke tableState', tableState)
		console.log('newSMoke state', this.state)
		const {columns , data} = tableState
		const {title, animal, meatCut, ogWeight, trimWeight, smoker, physDesc, notes} = this.state.info
		const d = new Date()
		
		const submitData = {
			date: d.toDateString(),
			title: title,
			animal: animal,
			meatCut: meatCut,
			ogWeight: ogWeight,
			trimWeight: trimWeight,
			smoker: smoker,
			physDesc: physDesc,
			notes: notes,
			columns: columns,
			data: data
		}
		console.log(submitData)
		// API.postNewTable()
	}


	render() {
		return (
			<div style={style} >
				<h1>Title</h1>
				<Link to="/newsmokeinfo" className="btn btn-primary">Back</Link>

				<DataGrid>
					<ReactDataGrid
						enableCellSelect={true}
						columns={this.state.columns}
						rowGetter={this.rowGetter}
						rowsCount={this.state.rows.length}
						onGridRowsUpdated={this.handleGridRowsUpdated} 
					/>
				</DataGrid>

				<CustomButton in="Submit" value="submit" clickHandler={this.submit} />
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