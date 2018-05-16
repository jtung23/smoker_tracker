import React, {Component} from 'react';
// import Col from '../Col'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
// import HeaderCol from '../HeaderCol';
import CustomButton from '../CustomButton';
import TableFn from '../../utils/TableFn.js'

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

	static getDerivedStateFromProps = (nextProps, prevState) => {
		// creates initial starting time row on component mount
		if (!prevState.init) {
			const data1 = TableFn.createDataObj(nextProps.headerCols)
			data1.time = nextProps.startingTime
			data1.index = 0

			const data = prevState.data.slice()
			data.push(data1)
			return {
				columns: nextProps.headerCols,
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
	
	componentDidUpdate = () => {
		// sets addRemove state in NewSmoke to ""
		if (this.props.addRemoveCol === 'add' || this.props.addRemoveCol === 'remove') {
			this.props.blankAddRemove()
		}
	}

	submit = () => {
		console.log('submit on tablel click')
		console.log(this.state.data)
		this.props.submitData(this.state)
	}
	// updates table state when the cell is changed
	updateTableState = (oldValue, newValue, row, column) => {
		let data1 = this.state.data.slice()
		const index = row.index
		const fieldName = column.dataField
		data1[index][fieldName] = newValue
		console.log(this.state.data)
		// console.log(data[index][fieldName])
		// console.log(newValue)
		// console.log(data)
		// console.log(this.state.data)
		// this.setState({
		// 	data: data
		// })
	}

	render() {
		return (
			<div>
				<BootstrapTable 
					keyField="time"
					columns={this.state.columns}
					data={this.state.data}
					cellEdit={ cellEditFactory({ 
						mode: 'click',
						afterSaveCell: this.updateTableState,
						blurToSave: true
						}) 
					}
				/>
				<CustomButton in="Submit" value="submit" clickHandler={this.submit} />
			</div>
		)
	}
}


export default Table;
