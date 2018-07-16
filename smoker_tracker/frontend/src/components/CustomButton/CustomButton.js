import React from 'react';

const CustomButton = props =>
	<button className={props.className} onClick={props.clickHandler} value={props.value} >
		{props.in}
	</button>

export default CustomButton
