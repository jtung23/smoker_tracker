import React from 'react';

const CustomButton = props =>
	<button onClick={props.handleAddRemove} value={props.value} >
		{props.in}
	</button>

export default CustomButton
