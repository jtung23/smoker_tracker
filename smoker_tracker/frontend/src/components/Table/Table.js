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
			},
    		{
    			dataField: 'int_temp',
    			text: 'Internal Temp',
			},
    		{
    			dataField: 'grill_temp',
    			text: 'Grill Temp',
    		}
    	],
    	data: [
    		{
    			time: props.timeCols
    		}
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
		// let startingTimeCol = {
		// 	dataField: this.props.timeCols[0],
		// 	text: this.props.timeCols[0]
		// }
		// pushes startingtime column into current columns (only has header col)
		// let newTimeCols= this.state.columns
		// newTimeCols.push(startingTimeCol)

		// // creates empty field for starting time col for each row
		// headers.forEach(item => {
		// 	item[this.props.timeCols[0]] = ""
		// })

		this.setState({
			columns: headers
			
		})
	}
	componentWillReceiveProps = (nextProps) => {
		let newData = this.state.data
		let newColumns = this.state.columns
		if (nextProps.addRemoveCol === "remove" && newData.length > 1) {
			newData.pop()
			this.setState({
				data: newData
			})
		}
		if (nextProps.addRemoveCol === "add") {		
			newData.push({
  			time: nextProps.newTime
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
