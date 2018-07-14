import React from 'react';

const InfoBox = props =>
	<div>
		<h4>Animal</h4>
		<p>{props.animal}</p>
		
		<h4>Cut</h4>
		<p>{props.meatCut}</p>

		<h4>Weight</h4>
		<p>{props.ogWeight}</p>

		<h4>Post-Trim Weight</h4>
		<p>{props.trimWeight}</p>


		<h4>Smoker</h4>
		<p>{props.smoker}</p>

		<h4>Physical Description</h4>
		<p>{props.physDesc}</p>

		<h4>Notes</h4>
		<p>{props.notes}</p>
	</div>

export default InfoBox