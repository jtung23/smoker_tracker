import React from 'react';

const HeaderCol = props =>
	<tbody>
		{props.col.map((item, i) => 
			<tr key={i} index={i}>
				<th>
					{item}
				</th>
				{(i === 0) ? props.newTimeHeader : props.newTd}
			</tr>
		)}
	</tbody>
	
export default HeaderCol