import React, {Component} from 'react';
// import InfoBox from '../../components/InfoBox';
// import HeaderCol from '../../components/HeaderCol';
import DataGrid from '../../components/DataGrid';
// import CustomButton from '../../components/CustomButton';
import {Link} from "react-router-dom";
import CustomButton from '../../components/CustomButton';
import BootModal from '../../components/BootModal';
import API from '../../utils/API';
import TableFn from '../../utils/TableFn'
import ReactDataGrid from 'react-data-grid';
import update from 'immutability-helper';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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
			rows: this.createRows(6)
		}

	}
	handleAddCol = () => {
		MySwal.fire({
			title: <p>Hello World</p>,
			input: 'text',
			inputPlaceholder: 'Enter the new column name',
			showCancelButton: true,
			inputValidator: (value) => {
				return !value && 'You need to write something!'
			}
			// onOpen: () => {
			//   // `MySwal` is a subclass of `Swal`
			//   //   with all the same instance & static methods
			//   MySwal.clickConfirm()
			// }
		  }).then((res) => {
				if (res.value) {
					// camelCase the string
					let obj = {
						key: TableFn.camelCase(res.value),
						name: res.value,
						editable: true
					}
					this.setState({
						columns: [...this.state.columns, obj]
					})
				}
			
		  })
	}
	handleRemoveCol = () => {
		let columns = this.state.columns.slice(0,this.state.columns.length-1)
		this.setState({ columns })	
	}
	
	handleAdd = (event) => {
		// adds new row with id based on length of rows state
		// uses ES6 spread operator to cleanly combine the two arrays in the state
		let addRow = {id: this.state.rows.length+1}
		this.setState({
			rows: [...this.state.rows, addRow]
		})
	}

	// Slices from beginning to last value in array, sets new value.
	// Using slice since does not modify the original array, instead returns a shallow copy
	handleRemove = (event) => {
		let rows = this.state.rows.slice(0,this.state.rows.length-1)
		this.setState({ rows })	
	}

	// ***UNUSED****
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

	submitData = () => {
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
			rows: this.state.rows,
			columns: this.state.columns
		}
		console.log(submitData)
		// API.postNewTable()
	}


	render() {
		return (
			<div style={style} >
				<h1>Title</h1>
				<Link to="/newsmokeinfo" className="btn btn-primary">Back</Link>
				<CustomButton in="Add Column" value="add" clickHandler={this.handleAddCol} />
				<CustomButton in="Remove Column" value="remove" clickHandler={this.handleRemoveCol} />
				<DataGrid>
					<ReactDataGrid
						enableCellSelect={true}
						columns={this.state.columns}
						rowGetter={this.rowGetter}
						rowsCount={this.state.rows.length}
						onGridRowsUpdated={this.handleGridRowsUpdated} 
					/>
				</DataGrid>

				<CustomButton in="Submit" value="submit" clickHandler={this.submitData} />
				<CustomButton in="Add" value="add" clickHandler={this.handleAdd} />
				<CustomButton in="Remove" value="remove" clickHandler={this.handleRemove} />
			</div>
		)
	}
}

export default NewSmoke;