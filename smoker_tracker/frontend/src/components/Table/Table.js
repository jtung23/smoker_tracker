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
		switch(this.props.typeOfSmoker) {
			case "1":
				this.addWSMRowHeaders()
				break;
			default:
				break;
		}
		let start = this.props.timeCols[0]
		let startingTimeCol = {
			dataField: start,
			text: start
		}

		let newTimeCols= this.state.columns
		newTimeCols.push(startingTimeCol)

		let newData= this.state.data
		newData.forEach(item => {
			item[start] = ""
		})
		console.log(newData)

		this.setState({
			columns: newTimeCols,
			data: newData
		})
	}

	componentWillUpdate =(nextProps, nextState) => {
		console.log(nextProps, nextState)
		let newColumns = this.state.columns
		let newData = this.state.data
		if (nextProps.addRemoveCol === "remove") {
			newColumns.pop()
			newData.pop()
			this.setState({
				columns: newColumns,
				data: newData
			})
		}
		if (nextProps.addRemoveCol === "add") {
			console.log("TABLE NEWTIME", nextProps.newTime)
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
		this.setState({
			data: newarr
		})
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
