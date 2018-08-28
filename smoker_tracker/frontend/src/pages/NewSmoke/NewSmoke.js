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
import TextField from '@material-ui/core/TextField';

// sweet alert set up
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

class NewSmoke extends Component {
	constructor(props) {
		super(props);
		this.state= {
			id: '',
			notLoggedIn: false,
			title: '',
			animal: '',
			meatCut: '',
			ogWeight: '',
			trimWeight: '',
			smoker: '',
			physDesc: '',
			notes: '',
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
			rows: this.createRows(2)
		}

	}

	componentDidMount = () => {
		// sets default blank state in localstorage
		localStorage.setItem('defaultState', JSON.stringify(this.state))
		const stateData = localStorage.getItem('stateData')
		if (stateData) {
			this.setState(JSON.parse(stateData))
		}
	}
	
	componentDidUpdate = () => {
		if (this.state.id === '' && this.props.id > 0) {
			console.log('didupdate runs')
			this.setState({
				id: this.props.id
			})
		}

		localStorage.setItem('stateData', JSON.stringify(this.state))

	}
	handleInfoOnChange = e => {
		const {name, value} = e.target
		this.setState({
			[name]: value
		})
	}
	clearEverything = () => {
		this.setState(JSON.parse(localStorage.getItem('defaultState')))
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
			time: "",
			internalTemp: "",
			grillTemp: ""
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
		const {title, animal, meatCut, ogWeight, smoker, physDesc, notes, rows, columns} = this.state
		if (!title) {
			MySwal.fire({
				type: 'error',
				title: 'Error',
				text: 'You need a title to continue'
			})
			return
		}
		const d = new Date()
		columns.forEach((val, i) => {
			if (val.editable) {
				columns[i].editable = val.editable.toString()
			}
		})
		const submitData = {
			userId: this.state.id,
			created_at: d.toDateString(),
			title: title,
			animal: animal,
			meatCut: meatCut,
			ogWeight: parseFloat(ogWeight),
			smoker: smoker,
			physDesc: physDesc,
			notes: notes,
			data: rows,
			columns: columns
		}

		API.postNewTable(submitData)
			.then(res => {
				console.log(res)
			})
			.catch(err => {console.log('error', err)})
		API.getAllSessions()
			.then(res => {
				console.log(res)
			})
	}


	render() {
		return (
			<div className="container-fluid newSmoke__container" >
				<div className="container newSmoke__containerData">
					<div className="row">
						<Link to="/" className="landing__div--btn">Back</Link>
						<CustomButton className="bottom-right align-bottom" in="Clear" value="clear" clickHandler={this.clearEverything} />
					</div>
					<div className="row align-items-end noMargLeft">
						<div className="six columns">
							<h4>
								<TextField
									className="textField--bkgborder"
									name="title"
									margin="dense"
									fullWidth
									required
									value={this.state.title}
									label="Title"
									onChange={this.handleInfoOnChange} 
								/>
							</h4>
						</div>
						<div className="offset-by-three three columns">
							<div className="align-bottom">
								Columns:
								<CustomButton className="bottom-right align-bottom" in={<i className="fas fa-plus"></i>} value="add" clickHandler={this.handleAddCol} />
								<CustomButton className="bottom-right align-bottom" in={<i className="fas fa-minus"></i>} value="remove" clickHandler={this.handleRemoveCol} />
							</div>
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
						Rows:
						<CustomButton
							in={<i className="fas fa-plus"></i>}
							value="add"
							clickHandler={this.handleAdd} />
						<CustomButton
							in={<i className="fas fa-minus"></i>}
							value="remove"
							clickHandler={this.handleRemove} />
					</div>
					<div className="row noMargeLeft row--marginTop" >
						<TextField
							className="offset-by-one two columns textField--bkgborder"
							label="What animal?"
							name="animal"
							value={this.state.animal}
							onChange={this.handleInfoOnChange} />
						<TextField
							className="pffset-by-one two columns textField--bkgborder" 
							style={{marginLeft: "20px"}}
							label="What cut?"
							name="meatCut"
							value={this.state.meatCut}
							onChange={this.handleInfoOnChange} />
						<TextField
							className="offset-by-one four columns textField--bkgborder"
							multiline
							fullWidth
							rows="2"
							label="Description"
							name="physDesc"
							value={this.state.physDesc}
							onChange={this.handleInfoOnChange} />
						<p className="two columns">
							You must be logged in and your session
							must have a title to submit
						</p>
					</div>
					<div className="row noMargeLeft row--marginTop">
						<TextField
							className="offset-by-one two columns textField--bkgborder textField--marginTop" 
							label="Net Weight? (lbs)"
							margin="dense"
							name="ogWeight"
							value={this.state.ogWeight}
							onChange={this.handleInfoOnChange} />
						<TextField
							className="two columns textField--bkgborder textField--marginTop"
							style={{marginLeft: "20px"}}
							margin="dense"
							label="Smoker?"
							name="smoker"
							value={this.state.smoker}
							onChange={this.handleInfoOnChange} />
						<TextField
							className="offset-by-one four columns textField--bkgborder"
							multiline
							fullWidth
							rows="2"
							margin="dense"
							label="Results/Notes"
							name="notes"
							value={this.state.notes}
							onChange={this.handleInfoOnChange} />

						<CustomButton disabled={!this.props.logged_in} className="two columns newSmoke__submitBtn" in="Submit" value="submit" clickHandler={this.submitData} />
					</div>
				</div>
			</div>
		)
	}
}

export default NewSmoke;