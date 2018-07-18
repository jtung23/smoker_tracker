import React, { Component } from 'react';
import Landing from './pages/Landing';
import NewSmoke from './pages/NewSmoke';
import BootNavBar from './components/BootNavBar';
import NewSmokeInfo from './components/NewSmokeInfo';
import SearchResults from './pages/SearchResults';
// materialui's timepicker and other styles
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Auth } from "aws-amplify";
import NotFound from './components/NotFound';
// sweet alert set up
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import API from './utils/API';
// for routing and links
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const MySwal = withReactContent(Swal)


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  displayed_form: '',
		  logged_in: localStorage.getItem('token') ? true : false,
		  username: '',
		  email: '',
		  password: ''
		};
	}

	loginClick = () => {
		MySwal.mixin({
			input: 'text',
			confirmButtonText: 'Next &rarr;',
			showCancelButton: true,
			progressSteps: ['1', '2'],
			inputValidator: (value) => {
				return !value && 'You need to write something!'
			}
		}).queue([
			{
				title: 'Email',
				input: 'email',
				inputValidator: (value) => {
					if (!value.includes('@')) {
						return 'Must be a valid email address';
					}
				}
			},
			{
				title: 'Password',
				text: '*at least 6 characters',
				input: 'password',
				confirmButtonText: 'Login',
				inputValidator: (value) => {
					if (value.length < 6) {
						return 'Password must be at least 6 characters';
					}
					return !value && 'You need to write something!'
				}
			}
		]).then((result) => {
			if (result.value) {
				const requestObj = {
					url: 'auth/current_user/',
					data: JSON.stringify({
						username: result.value[0],
						password: result.value[1]
					}),
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}

				fetch('http://localhost:8000/auth/users', {
					method: 'POST',
					headers: {
					  'Content-Type': 'application/json'
					},
					body: requestObj.data
				  })
					.then(res => res.json())
					.then(json => {
					  localStorage.setItem('token', json.token);
					  console.log(json.token)
					  this.setState({
						logged_in: true,
						displayed_form: '',
						username: json.user.username
					  });
					});
				// API.loginUser(requestObj)
				// 	.then(res => res.json())
				// 	.then(json => {
				// 		console.log(json)	
				// this.handleSubmit(result.value[0], result.value[1])
				// this.setState({
				// 	email: result.value[0],
				// 	password: result.value[1]
					// })
			}
		})
	}

	registerClick = () => {
		MySwal.mixin({
			input: 'text',
			confirmButtonText: 'Next &rarr;',
			showCancelButton: true,
			progressSteps: ['1', '2'],
			inputValidator: (value) => {
				return !value && 'You need to write something!'
			}
		}).queue([
			{
				title: 'Email',
				input: 'email',
				inputValidator: (value) => {
					if (!value.includes('@')) {
						return 'Must be a valid email address';
					}
				}
			},
			{
				title: 'Password',
				text: '*at least 6 characters',
				input: 'password',
				confirmButtonText: 'Register',
				inputValidator: (value) => {
					if (value.length < 6) {
						return 'Password must be at least 6 characters';
					}
					return !value && 'You need to write something!'
				}
			}
		]).then((result) => {
			if (result.value) {
				const url = 'auth/users/'
				const userData = {
					username: result.value[0],
					password: result.value[1]
				}
				fetch('http://localhost:8000/auth/users', {
					method: 'POST',
					headers: {
					  'Content-Type': 'application/x-www-form-urlencoded'
					},
					body: JSON.stringify(userData)
				  })
					.then(res => res.json())
					.then(json => {
						console.log(json.token)
					})
				// this.handleSubmit(result.value[0], result.value[1])
				// this.setState({
				// 	email: result.value[0],
				// 	password: result.value[1]
				// })
			}
		})
	}

	// handleSubmit = async (email, password) => {
	// 	try {
	// 		await Auth.signIn(email, password);
	// 		alert("Logged in");
	// 	} catch (e) {
	// 		alert(e.message);
	// 	}
	// }
	
  render() {
    return (
			<MuiThemeProvider>
				<Router>
					<div className="app">
						<BootNavBar
							loginClick={this.loginClick}
							registerClick={this.registerClick} />
						<Switch>
							<Route exact path="/" component={Landing}/>
							<Route path="/newsmoke" component={NewSmoke} />
							<Route path="/newsmokeinfo" component={NewSmokeInfo} />
							<Route path="/searchresults" component={SearchResults} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</Router>
			</MuiThemeProvider>
    );
  }
}

export default App;
