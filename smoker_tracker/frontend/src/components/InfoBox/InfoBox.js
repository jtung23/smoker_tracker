import React from 'react';

const InfoBox = props =>
	<div className="infoBox__container">
		<div className="row noMargLeftRight">
			<div className="vertical-align-wrap">
				<div className="vertical-aign--bottom">
					<div>
						<h4 className="font--freightSans">
							Details 
							<p className="font--freightText float--right font--mini">Last Modified: {props.last_modified}</p>
						</h4>
					</div>
				</div>
			</div>
		</div>
		<div className="infoBox__div font--freightText">
			<div className="infobox__textDiv">
				<label>BBQ'd on</label>
				<p>{props.created_at}</p>

				<label>Animal</label>
				<p>{props.animal}</p>
				
				<label>Cut</label>
				<p>{props.meatCut}</p>

				<label>Weight</label>
				<p>{props.ogWeight}</p>

				<label>Smoker</label>
				<p>{props.smoker}</p>

				<label>Physical Description</label>
				<p>{props.physDesc}</p>

				<label>Notes</label>
				<p>{props.notes}</p>
			</div>
		</div>
	</div>

export default InfoBox