import React, {Component} from 'react';
// import InfoBox from '../../components/InfoBox';
// import HeaderCol from '../../components/HeaderCol';
import DataGrid from '../../components/DataGrid';
// import CustomButton from '../../components/CustomButton';
import {Link} from "react-router-dom";
import CustomButton from '../../components/CustomButton';
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
				title: '',
				animal: '',
				meatCut: '',
				ogWeight: '',
				trimWeight: '',
				smoker: '',
				interval: '',
				physDesc: '',
				notes: ''
			},
			columns: [
				{
				  key: 'id',
				  name: 'ID',
				  width: 80
				},
				{
				  key: 'time',
				  name: 'Time (HH:mm)',
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

	handleInfoOnChange = e => {
		const {name, value} = e.target
		this.setState({
			info: {
				[name]: value
			}
		})
	}
	// Adding and Removing Columns *************************************************
	handleAddCol = () => {
		MySwal.fire({ 	// Sweet Alert runs prompting for new column name
			title: <p>Add New Column</p>,
			input: 'text',
			inputPlaceholder: 'Enter the new column name',
			showCancelButton: true,
			inputValidator: (value) => {
				return !value && 'You need to write something!'
			}
		  }).then((res) => { // Promise runs where value is converted to camelcase for the key
				if (res.value) {
					let obj = {
						key: TableFn.camelCase(res.value), // camelCase the string
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
	// End Add/Remove Columns ***************************************************************
	//
	// Add Removing Rows ********************************************************************
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
	// End Add Removing Rows ********************************************************************
	//
	//
	// DataGrid Methods for creating rows, getting rows, and allowing editing *******************
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
//  End DataGrid Fns *********************************************************************************************
// 
//
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
			<div className="container-fluid"style={style} >
				<div className="row noMargLeft">
					<Link to="/newsmokeinfo" className="btn btn-primary">Back</Link>
				</div>
				<div className="row">
					<div className="col-md-4">
						<h4>
							<input
								name="title"
								value={this.state.info.title}
								type="text"
								placeholder="Title"
								onChange={this.handleInfoOnChange} 
							/>
						</h4>
					</div>
					<div className="col-md-4 offset-md-4">
						<CustomButton className="bottom-right align-bottom" in="Add Column" value="add" clickHandler={this.handleAddCol} />
						<CustomButton className="bottom-right align-bottom" in="Remove Column" value="remove" clickHandler={this.handleRemoveCol} />
					</div>
				</div>
				<div>
					<DataGrid>
						<ReactDataGrid
							enableCellSelect={true}
							columns={this.state.columns}
							rowGetter={this.rowGetter}
							rowsCount={this.state.rows.length}
							onGridRowsUpdated={this.handleGridRowsUpdated} 
						/>
					</DataGrid>
				</div>
				<div className="row noMargLeft">
					<CustomButton
						in="Add"
						value="add"
						clickHandler={this.handleAdd} />
					<CustomButton
						in="Remove"
						value="remove"
						clickHandler={this.handleRemove} />
				</div>
				<div className="row noMargLeft">
					<CustomButton in="Submit" value="submit" clickHandler={this.submitData} />
				</div>
			</div>
		)
	}
}

export default NewSmoke;