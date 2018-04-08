import React, {Component} from 'react';
import Col from '../Col'
import ReactTable from 'react-table'
import "react-table/react-table.css";
//			<table>
//				<tbody>
//					<tr>
//						<th>
//							Time
//						</th>
//					</tr>
//					<tr>
//						<th>
//							Internal Temp
//						</th>
//					</tr>
//					<tr>
//						<th>
//							Grill Temp
//						</th>
//					</tr>
//				</tbody>
//					{this.props.children}
//			</table>

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	timeHeaders: [

    	]
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

	componentWillMount = () => {
		// takes interval and startingTime prop to make col headers. makes a total of 8 hours
		let allNewHeadersArr = [				
			{
				Header: "Time",
				accessor: "time",
				Cell: this.renderEditable
			}
		]
		const numCols = Math.floor(480/this.props.interval)
		let start = this.props.startingTime
		let step = this.props.interval
		for (var i = 0; i < numCols + 1; i++) {
			// makes obj with Header as time, accessor as the time, both converted to string
			let startString = start.toString()
			let newHeader = startString
			let newAccessor = startString
			let newObj = {
				Header: newHeader,
				accessor: newAccessor,
				Cell: this.renderEditable
			}
			start += step
			allNewHeadersArr.push(newObj)
		}

		console.log(allNewHeadersArr)
		this.setState({
			timeHeaders: allNewHeadersArr
		})
	}


  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        // onBlur={e => {
        //   const data = [...this.state.data];
        //   data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
        //   this.setState({ data });
        // }}
        // dangerouslySetInnerHTML={{
        //   __html: this.state.data[cellInfo.index][cellInfo.column.id]
        // }}
      />
    );
  }

	render() {
		return (
			<div>
				<ReactTable
					columns={this.state.timeHeaders}
					className="-striped -highlight"
				/>
			</div>
		)
	}
}


export default Table;