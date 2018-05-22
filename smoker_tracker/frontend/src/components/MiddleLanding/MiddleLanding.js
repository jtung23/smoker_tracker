import React from 'react';
import Background from '../../img/jumbotronmeat.jpg';

const style = {
	landing: {
		width: '100%',
		height: '100vh',
		backgroundImage: 'url('+Background+')',

	}
}
const MiddleLanding = props => 
	<div className='text-center' style={style.landing} >
		{props.children}
	</div>

export default MiddleLanding;