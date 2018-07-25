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
			id: '',
			email: '',
			password: '',
			confirmPass: '',
			passwordValidation: false,
			loginValidation: false,
			emailValidation: false,
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
					console.log(json)
					this.setState({ 
						name: json.first_name,
						id: json.id
					});
				})
				.catch(err => {console.log(err)})
		}
	}

	logoutClick = () => {
		console.log('logout')
		localStorage.removeItem('token');
		this.setState({ logged_in: false, username: '' });
	};

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
		let requestObj = {}
		console.log(e.target.value)
		if (e.target.value === "login") { // if value is completed

			console.log('login runs')

			requestObj = {
				username: this.state.email,
				password: this.state.password
			}
			const url = 'token-auth/'
			API.loginRegUser(url, requestObj)
				.then(res => {
				  localStorage.setItem('token', res.data.token);
				  console.log(res.token)
				  this.setState({
					logged_in: true,
					loginValidation: false,
					displayed_form: '',
					username: res.data.username,
					// resets password/email after use
					password: '',
					email: '',
					open: false,
					passwordValidation: false
				  });
				})
				.catch(err => {
					// if login fails then notification pops up saying login failed
					this.setState({
						email: '',
						password: '',
						loginValidation: true,
					})
				});

		} else if (e.target.value === "register") {
			if (this.state.password !== this.state.confirmPass) {
				this.setState({
					passwordValidation: "Passwords do not match"
				})
			} else {
				console.log('register runs')
				requestObj = {
					first_name: this.state.name,
					email: this.state.email,
					username: this.state.email,
					password: this.state.password
				}
				console.log(requestObj)
				const url = 'users/'
				API.loginRegUser(url, requestObj)
					.then(res => {
						console.log(res)
						localStorage.setItem('token', res.data.token)
	
						this.setState({
							logged_in: true,
							displayed_form: '',
							name: res.data.first_name,
							open: false,
							password: '',
							email: '',
							username: '',
							passwordValidation: false
						  });
					})
					.catch(err => {
						if (err.response.status === 409) { // if email already exists in User db
							this.setState({
								password: '',
								confirmPass: '',
								email: '',
								passwordValidation: false,
								emailValidation: "That email has already been used"
							})
						}
					})
			}

		} else {
			this.setState({
				open: false,
				passwordValidation: false,
				emailValidation: false,
				password: '',
				confirmPass: '',
				email: '',
				name: ''
			});
		}

	}
	


  render() {
	let form;
    switch (this.state.displayed_form) {
      case 'login':
		form = <LoginDialog 
			open={this.state.open} 
			loginValidation={this.state.loginValidation}
			handleClose={this.handleClose} 
			handleFormChange={this.handleFormChange}
			email={this.state.email}
			password={this.state.password} />;
        break;
      case 'reg':
		form = <RegisterDialog 
			open={this.state.open}
			emailValidation={this.state.emailValidation}
			passwordValidation={this.state.passwordValidation}
			handleClose={this.handleClose}
			handleFormChange={this.handleFormChange}
			name={this.state.name}
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
							name={this.state.name}
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
