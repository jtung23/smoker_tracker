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

	// componentWillMount = () => {
		// this.props.headerCols.forEach(item => {
		// 	blankData[item.dataField] = ''
		// })
		// creates copy of blankData to be used

	// }
	

	static getDerivedStateFromProps = (nextProps, prevState) => {
		console.log('nextProps', nextProps)
		console.log('prevState', prevState)

		if (!prevState.init) {
			const data1 = TableFn.createDataObj(nextProps.headerCols)
			data1.time = nextProps.startingTime
			data1.index = 0
	
			const data = prevState.data.slice()
			data.push(data1)
			console.log('DATA', data)
			return {
				columns: nextProps.headerCols,
				data: data,
				init: true
			}
		}
		// creates copy, without reference to state of data array
		// let newData = TableFn.createDataObj(this.state.data)
		// console.log('STATE', this.state)
		console.log('nextProps', nextProps)
		console.log('nextState', prevState)
		// if (nextProps.addRemoveCol === "remove" && newData.length > 1) {
		// 	console.log('REMOVE RUNS')
		// 	newData.pop()
		// 	this.setState({
		// 		addRemove: "",
		// 		data: newData
		// 	})
		// }
		// if (nextProps.addRemoveCol === "add") {
		// 	console.log('TABLE ADD RUNS DSLKJFLKJDSLKFDS')
		// 	let newHeaderCols = TableFn.createDataObj(this.props.headerCols)
		// 	let newArr = this.state.data.slice()
		// 	console.log('NEWARR BEFORE', newArr)
		// 	newHeaderCols.time = this.state.newTime	
		// 	newHeaderCols.index = newArr.length

		// 	newArr.push(newHeaderCols)
		// 	console.log('NEWARR AFTER', newArr)
		// 	this.setState({
		// 		addRemove: "",
		// 		data: newArr
		// 	})
		// }
	}

	submit = () => {
		console.log('submit on tablel click')
		console.log(this.state.data)
		this.props.submitData(this.state)
	}

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
