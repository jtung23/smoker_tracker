import React from 'react';

const CustomButton = props =>
	<button onClick={props.clickHandler} value={props.value} >
		{props.in}
	</button>

export default CustomButton
