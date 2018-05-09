import React, {Component} from 'react';
// import Col from '../Col'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
// import HeaderCol from '../HeaderCol';
import CustomButton from '../CustomButton';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	columns: [],
    	data: [
    		{
				time: props.startingTime,
				int_temp: '',
				grill_temp: '',
				index: 0
    		}
    	]
    };
  }

	componentWillMount = () => {
		// let headers
		// headers becomes new array including all WSM vent rows
		// if (this.props.typeOfSmoker === "1") {
		// 		headers = this.addWSMRowHeaders()
		// }

		this.setState({
			columns: this.props.headerCols
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
			newData.push({
			  time: nextProps.newTime,
			  int_temp: '',
			  grill_temp: '',
			  index: newData.length-1
    		})
			this.setState({
				data: newData
			})
		}		
	}

	addWSMRowHeaders = () => {
		let newData = this.state.columns
		let wsm = [
    		{
    			dataField: 'vent1',
    			text: 'Vent 1'
    		},
    		{
    			dataField: 'vent2',
    			text: 'Vent 2'
    		},
    		{
    			dataField: 'vent3',
    			text: 'Vent 3'
    		}
    	]
		let newarr = newData.concat(wsm)
		return newarr
	}

	submit = () => {
		console.log('submit on tablel click')
		console.log(this.state.data)
		this.props.submitData(this.state)
	}

	updateTableState = (oldValue, newValue, row, column) => {
		const data = this.state.data
		console.log(data)
		const index = row.index
		const fieldName = column.dataField
		
		// data[index][fieldName] = newValue
		console.log(this.state.data)
		this.setState({
			data: data
		})
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
