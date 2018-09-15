import React, { Component } from 'react';
import Landing from './pages/Landing';
import NewSmoke from './pages/NewSmoke';
import SessionList from './pages/SessionList';
import Session from './pages/Session';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import LoginDialog from './components/LoginDialog';
import RegisterDialog from './components/RegisterDialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import history from './utils/history.js';

import API from './utils/API';
// for routing and links
import { Router } from 'react-router';
import {
  Route,
  Switch
} from 'react-router-dom';
// sweet alert set up
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// const MySwal = withReactContent(Swal)


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayed_form: '',
			logged_in: localStorage.getItem('token') ? true : false,
			name: localStorage.getItem('name') ? localStorage.getItem('name') : '',
			id: localStorage.getItem('id') ? localStorage.getItem('id') : '',
			email: '',
			password: '',
			confirmPass: '',
			passwordValidation: false,
			loginValidation: false,
			emailValidation: false,
			open: false,
			toggleClass: null,
			toggleTransparency: null,
			toggleColor: null,
			sessions: [],
			haveSessions: false
		};
	}

	componentDidUpdate = () => {
		// console.log(this.state)
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
					// error if signature expires
					if (json.detail) {
						this.logoutClick()
						return
					}

					this.setState({ 
						name: json.first_name,
						id: json.id
					});
				})
				.catch(err => {console.log(err)})
		}
	}

	logoutClick = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('id');
		this.setState({ logged_in: false, username: '', id: ''});
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
		if (e.target.value === "login") { // if value is completed

			requestObj = {
				username: this.state.email,
				password: this.state.password
			}
			const url = 'token-auth/'
			API.loginRegUser(url, requestObj)
				.then(res => {
				  localStorage.setItem('token', res.data.token);
				  localStorage.setItem('name', res.data.user.first_name)
				  localStorage.setItem('id', res.data.user.id)
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
				requestObj = {
					first_name: this.state.name,
					email: this.state.email,
					username: this.state.email,
					password: this.state.password
				}
				const url = 'users/'
				API.loginRegUser(url, requestObj)
					.then(res => {
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

	toggleButton = () => {
		if (!this.state.toggleClass) {
			this.setState({
				toggleClass: "nav__toggleShow",
				toggleTransparency: "nav__toggleTransparency",
				toggleColor: "nav__toggleColor"
			})
		} else {
			this.setState({
				toggleClass: null,
				toggleTransparency: null,
				toggleColor: null
			})

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
				<Router history={history}>
					<div className="app">
						<NavBar
							handleLoginRegBtnClick={this.handleLoginRegBtnClick}
							toggleButton={this.toggleButton}
							toggleColor={this.state.toggleColor}
							toggleTransparency={this.state.toggleTransparency}
							toggleClass={this.state.toggleClass}
							logged_in={this.state.logged_in}
							name={this.state.name}
							loginClick={this.loginClick}
							logoutClick={this.logoutClick}
							registerClick={this.registerClick} />
						<Switch>
							<Route exact path="/" component={Landing}/>
							<Route path="/newsmoke" exact render={() => <NewSmoke logged_in={this.state.logged_in} id={this.state.id} />} />
							<Route path="/searchresults" component={SearchResults} />
							<Route path="/sessionList" exact render={() => <SessionList sessions={this.state.sessions} haveSessions={this.state.haveSessions} />} />
							<Route path="/profile" component={Profile} />
							<Route path="/session" component={Session} />
							<Route component={NotFound} />
						</Switch>

						{form}

					</div>
				</Router>
			</MuiThemeProvider>
    );
  }
}

export default App;
