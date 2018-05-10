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

	componentWillMount = () => {
		// sets up data template to be used further down
		this.props.headerCols.forEach(item => {
			blankData[item.dataField] = ''
		})
		// creates copy of blankData to be used
		const data1 = Object.assign({},blankData)

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
			console.log('blankDATA:', blankData)
			blankData.time = nextProps.newTime	
			blankData.index = newData.length-1
			newData.push(blankData)
			
			console.log('newData', newData)
			this.setState({
				data: newData
			})
		}		
	}

	submit = () => {
		console.log('submit on tablel click')
		console.log(this.state.data)
		this.props.submitData(this.state)
	}

	updateTableState = (oldValue, newValue, row, column) => {
		let data1 = Object.assign({}, this.state.data)
		const index = row.index
		const fieldName = column.dataField
		data1[0]['int_temp'] = newValue

		console.log(data1)
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
