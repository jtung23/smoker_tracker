import React from 'react';

const Col = props =>
	<tbody>
		<tr>
			<th>
				{props.colHeader}
			</th>
		</tr>
	</tbody>


	
			<table>
				<Row numberTds={this.state.addTd} >
					<tr>
						<th></th>
						{props.numberTds ? 
							<td>
								<Editable />
							</td> : null
						}
					</tr>
				</Row>
				<Row />
				<Row />
				<HeaderCol 
					col={this.state.headerCol}
					newTimeHeader={this.newTimeHeader} 
					newTd={this.newTd}
				/>

			</table>
export default Col