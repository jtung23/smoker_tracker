import React, {Component} from 'react';
// import Col from '../Col'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
// import HeaderCol from '../HeaderCol';
import CustomButton from '../CustomButton';
import TableFn from '../../utils/TableFn.js'

import ReactTable from "react-table";
import "react-table/react-table.css";

const blankData = {}
class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [],
			data: [],
			init: false
		};
	}
	
	componentDidMount = () => {
		// creates data and col obj then updates state
		// as array with 1 object
		let data = [TableFn.createDataObj(this.props.headerCols)]
		data.time = this.props.startingTime
		data.index = 0
		// const data = this.state.data.slice()
		// data.push(data1)
		console.log(data)
		const editableCols = TableFn.addEditable(this.props.headerCols, 'default')
		console.log(editableCols)
		this.setState({
			data: data,
			columns: editableCols
		})
		// return {
		// 	columns: editableCols,
		// 	data: data,
		// 	init: true
		// }
	}

	componentDidUpdate = () => {
		// sets addRemove state in NewSmoke to ""
		if (this.props.addRemoveCol === 'add' || this.props.addRemoveCol === 'remove') {
			this.props.blankAddRemove()
		}

	}

	static getDerivedStateFromProps = (nextProps, prevState) => {
		// creates initial starting time row on component mount
		if (!prevState.init) {
			// runs in utils/TableFn to push appropriate data accessors for each value in the array
			const data1 = TableFn.createDataObj(nextProps.headerCols)
			data1.time = nextProps.startingTime
			data1.index = 0
			const data = prevState.data.slice()
			data.push(data1)
			const editableCols = TableFn.addEditable(nextProps.headerCols)
			console.log(editableCols)
			return {
				columns: editableCols,
				data: data,
				init: true
			}
		}
		// creates copy, without reference to state of data array
		// let newData = TableFn.createDataObj(this.state.data)
		if (nextProps.addRemoveCol === "remove" && prevState.data.length > 1) {
			prevState.data.pop()
			return {
				data: prevState.data
			}
		}
		if (nextProps.addRemoveCol === "add") {
			// creates blank object of column headers and modifies
			// to insert into newArr
			let newArr = prevState.data.slice()
			let newHeaderCols = TableFn.createDataObj(nextProps.headerCols)
			newHeaderCols.time = nextProps.timeToSend	
			newHeaderCols.index = newArr.length
			newArr.push(newHeaderCols)
			return {
				data: newArr
			}
		}
		return null
	}

	submit = () => {
		this.props.submitData(this.state)
		
	}

	renderEditable = cellInfo => {
		return (
			<div
				style={{ backgroundColor: "#fafafa" }}
				contentEditable
				suppressContentEditableWarning
				onBlur={e => {
					const data = [...this.state.data];
					data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
					this.setState({ data });
				}}
				dangerouslySetInnerHTML={{
				__html: this.state.data[cellInfo.index][cellInfo.column.id]
				}}
			/>
		);
	}

	// Editable cells for react bootstrap table
	// // updates table state when the cell is changed
	// updateTableState = (oldValue, newValue, row, column) => {
	// 	// creates non reference clone of data array of objects
	// 	let data1 = JSON.parse(JSON.stringify(this.state.data))
	// 	const index = row.index
	// 	const fieldName = column.dataField
	// 	// modifies clone based on index and fieldName
	// 	data1[index][fieldName] = newValue
	// 	this.setState({
	// 		data: data1
	// 	})
	// }

	render() {
		return (
			<div>
				<ReactTable
					data={this.state.data}
					columns={this.state.columns}
					className="-striped -highlight"
				/>
				<CustomButton in="Submit" value="submit" clickHandler={this.submit} />
			</div>
		)
	}
}

console.log(Table.constructor)


export default Table;
