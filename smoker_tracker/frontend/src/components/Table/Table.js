import React, {Component} from 'react';
// import Col from '../Col'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
// import HeaderCol from '../HeaderCol';
import CustomButton from '../CustomButton';

const blankData = {}
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	columns: [],
    	data: []
    };
  }
  	// sets up data template based on Cols and returns object
  	createDataObj = (arr) => {
		let obj = {}
		arr.forEach(item => {
			obj[item.dataField] = ''
		})
		return obj
	}
	componentWillMount = () => {
		// this.props.headerCols.forEach(item => {
		// 	blankData[item.dataField] = ''
		// })
		// creates copy of blankData to be used
		const data1 = this.createDataObj(this.props.headerCols)

		data1.time = this.props.startingTime
		data1.index = 0

		const data = this.state.data
		data.push(data1)

		this.setState({
			columns: this.props.headerCols,
			data: data
		})
	}
	componentWillReceiveProps = (nextProps) => {
		let newData = this.state.data
		if (nextProps.addRemoveCol === "remove" && newData.length > 1) {
			newData.pop()
			this.setState({
				data: newData
			})
		}
		if (nextProps.addRemoveCol === "add") {
			let newData = this.createDataObj(this.props.headerCols)
			let newArr = this.state.data.slice()

			newData.time = nextProps.newTime	
			newData.index = newArr.length
			console.log(newData)
			newArr.push(newData)
			console.log(newArr)
			this.setState({
				data: newArr
			})
		}
	}

	submit = () => {
		console.log('submit on tablel click')
		console.log(this.state.data)
		this.props.submitData(this.state)
	}

	updateTableState = (oldValue, newValue, row, column) => {
		let data1 = this.state.data.slice()
		const index = row.index
		console.log(index)
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
