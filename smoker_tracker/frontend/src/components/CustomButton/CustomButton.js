import React from 'react';
import {Link} from 'react-router-dom';

const CustomButton = props =>
	<button>
		<Link to={{
			pathname: props.link,
			state: props.state
		}}>
			{props.text}
		</Link>
	</button>

export default CustomButton
