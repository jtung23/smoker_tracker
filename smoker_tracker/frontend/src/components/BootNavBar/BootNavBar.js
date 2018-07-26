import React from 'react';
import {Link} from 'react-router-dom';

const BootNavBar = props => 
	<div className="navbar">
		<div className="nav__logoText">
			<Link to="/">
				BBQ Tracker
			</Link>
		</div>
		<div>
			{props.logged_in ? 
				<div>
					<h1>Hi {props.name}</h1>
					<ul className="">
						<li className="">
							<a 
								className=""
								onClick={props.logoutClick}>
								Log Out
							</a>
						</li>
					</ul>
				</div>
				:
				<ul className="">
					<li className="">
						<a 
							className=""
							href='javascript:void(0)'
							onClick={props.handleLoginRegBtnClick}
							value="login" >
							Login
						</a>
					</li>
					<li className="">
						<a 
							className="" 
							onClick={props.handleLoginRegBtnClick}
							value="reg" >
							Register
						</a>
					</li>
				</ul>
			}
		</div>
	</div>

export default BootNavBar