import React, { Component } from 'react';
import Landing from './pages/Landing';
import NewSmoke from './pages/NewSmoke';
import BootNavBar from './components/BootNavBar';
import NewSmokeInfo from './components/NewSmokeInfo';
import SearchResults from './pages/SearchResults';
// materialui's timepicker and other styles
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NotFound from './components/NotFound';
import LoginDialog from './components/LoginDialog';
import RegisterDialog from './components/RegisterDialog';

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
			name: '',
			email: '',
			password: '',
			open: false
		};
	}

	componentDidMount() {
		if (this.state.logged_in) {
			fetch('http://localhost:3000/current_user/', {
				headers: {
				  Authorization: `JWT ${localStorage.getItem('token')}`
				}
			  })
				.then(res => res.json())
				.then(json => {
				  this.setState({ username: json.username });
				})
				.catch(err => {console.log(err)})
		}
	}

	logoutClick = () => {
		console.log('logout')
		localStorage.removeItem('token');
		this.setState({ logged_in: false, username: '' });
	};

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
					email: result.value[0],
					password: result.value[1]
				}
				const url = 'token-auth/'
				API.loginRegUser(url, requestObj)
					.then(res => {
					  localStorage.setItem('token', res.data.token);
					  console.log(res.token)
					  this.setState({
						logged_in: true,
						displayed_form: '',
						username: res.data.username
					  });
					});
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
				const url = 'users/'
				const userData = {
					username: result.value[0],
					password: result.value[1]
				}
				API.loginRegUser(url, userData)
					.then(res => {
						console.log(res)
						localStorage.setItem('token', res.data.token)

						this.setState({
							logged_in: true,
							displayed_form: '',
							username: res.data.username
				  });
					})
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
	// sets displayed_form to either 'login' or 'reg
	handleLoginRegBtnClick = (e) => {
		this.setState({
			displayed_form: e.target.value,
			open: true
		})
	}
	handleFormChange = (e) => {
		const {name, value} = e.target
		this.setState({
			[name]: value
		})
	}
	handleClose = (e) => {
		if (e.target.value) { // if value is completed
			console.log(this.state.email, this.state.password)
		}
		// console.log('close!!!')
		this.setState({ open: false });
	}
	
  render() {
	let form;
    switch (this.state.displayed_form) {
      case 'login':
		form = <LoginDialog 
			open={this.state.open} 
			handleClose={this.handleClose} 
			handleFormChange={this.handleFormChange}
			email={this.state.email}
			password={this.state.password} />;
        break;
      case 'reg':
		form = <RegisterDialog 
			open={this.state.open} 
			handleClose={this.handleClose}
			handleFormChange={this.handleFormChange}
			username={this.state.username}
			email={this.state.email}
			password={this.state.password} />;
        break;
      default:
        form = null;
}
    return (
			<MuiThemeProvider>
				<Router>
					<div className="app">
						<BootNavBar
							handleLoginRegBtnClick={this.handleLoginRegBtnClick}
							logged_in={this.state.logged_in}
							username={this.state.username}
							loginClick={this.loginClick}
							logoutClick={this.logoutClick}
							registerClick={this.registerClick} />
						<Switch>
							<Route exact path="/" component={Landing}/>
							<Route path="/newsmoke" component={NewSmoke} />
							<Route path="/newsmokeinfo" component={NewSmokeInfo} />
							<Route path="/searchresults" component={SearchResults} />
							<Route component={NotFound} />
						</Switch>

=						{form}

					</div>
				</Router>
			</MuiThemeProvider>
    );
  }
}

export default App;
