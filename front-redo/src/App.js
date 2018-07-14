import React, { Component } from 'react';
import Landing from './pages/Landing';
import NewSmoke from './pages/NewSmoke';
import BootNavBar from './components/BootNavBar';
import NewSmokeInfo from './components/NewSmokeInfo';
import SearchResults from './pages/SearchResults';
// materialui's timepicker and other styles
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import './main.css';
// for routing and links
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
			<MuiThemeProvider>
				<Router>
					<div className="app">
						<BootNavBar />
						<Switch>
							<Route exact path="/" component={Landing}/>
							<Route path="/newsmoke" component={NewSmoke} />
							<Route path="/newsmokeinfo" component={NewSmokeInfo} />
							<Route path="/searchresults" component={SearchResults} />
						</Switch>
					</div>
				</Router>
			</MuiThemeProvider>
    );
  }
}

export default App;
