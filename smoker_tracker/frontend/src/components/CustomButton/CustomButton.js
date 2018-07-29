import React from 'react';

const CustomButton = props =>
	<button disabled={props.disabled} className={props.className} onClick={props.clickHandler} value={props.value} >
		{props.in}
	</button>

export default CustomButton
