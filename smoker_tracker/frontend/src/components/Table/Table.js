import React, {Component} from 'react';
import Col from '../Col'


class Table extends Component {

componentDidMount = () => {
}

	render() {
		return (
			<table>
				<tbody>
					<tr>
						<th>
							Time
						</th>
					</tr>
					<tr>
						<th>
							Internal Temp
						</th>
					</tr>
					<tr>
						<th>
							Grill Temp
						</th>
					</tr>
				</tbody>
					{this.props.children}
			</table>
		)
	}
}

export default Table;