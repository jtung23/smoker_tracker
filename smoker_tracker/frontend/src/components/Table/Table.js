import React, {Component} from 'react';
// import Col from '../Col'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
// import HeaderCol from '../HeaderCol';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	headerCol: ["Time", "Internal Temp", "Grill Temp"],
    	timeCols: [],
    	columns: [
    		{
    			dataField: 'time',
    			text: 'Time',
    		}
    	],
    	data: [
    		{
    			time: "Internal Temp"
    		},
    		{
    			time: "Gril Temp"
    		},
    	]
    };
  }

	componentWillMount = () => {
		let headers
		// headers becomes new array including all WSM vent rows
		if (this.props.typeOfSmoker === "1") {
				headers = this.addWSMRowHeaders()
		}
		// creates startingTime column determined by user
		let startingTimeCol = {
			dataField: this.props.timeCols[0],
			text: this.props.timeCols[0]
		}
		// pushes startingtime column into current columns (only has header col)
		let newTimeCols= this.state.columns
		newTimeCols.push(startingTimeCol)

		// creates empty field for starting time col for each row
		headers.forEach(item => {
			item[this.props.timeCols[0]] = ""
		})

		this.setState({
			columns: newTimeCols,
			data: headers
		})
	}
	componentWillReceiveProps = (nextProps) => {
		let newColumns = this.state.columns
		let newData = this.state.data
		if (nextProps.addRemoveCol === "remove" && newColumns.length > 1) {
			// removes last column and returns removed col
			let poppedCol = newColumns.pop()
			// deletes all object keys in data related to deleted col
			newData.forEach((item) => delete item[poppedCol.text]);

			this.setState({
				columns: newColumns,
				data: newData
			})
		}
		if (nextProps.addRemoveCol === "add") {		
			newColumns.push({
  			dataField: nextProps.newTime,
  			text: nextProps.newTime,
    	})
			newData.forEach(item => {
				item[nextProps.newTime] = ""
			})
			this.setState({
				columns: newColumns,
				data: newData
			})
		}		
	}

	addWSMRowHeaders = () => {
		let newData = this.state.data
		let wsm = [
    		{
    			time: "Vent 1"
    		},
    		{
    			time: "Vent 2"
    		},
    		{
    			time: "Vent 3"
    		}
    	]
		let newarr = newData.concat(wsm)
		return newarr
	}

	render() {
		return (
			<BootstrapTable 
				keyField="time"
				columns={this.state.columns}
				data={this.state.data}
				cellEdit={ cellEditFactory({ mode: 'click' }) }
		 	/>

		)
	}
}


export default Table;
