import React, { Component } from 'react';
import Landing from './pages/Landing';
import NewSmoke from './pages/NewSmoke';
import BootNavBar from './components/BootNavBar';
import NewSmokeInfo from './components/NewSmokeInfo';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Background from './img/jumbotronmeat.jpg';


const style = {
	everything: {
		backgroundImage: 'url('+Background+')',
		width: '100%',
		height: '100%',
	}
}
class App extends Component {
  render() {
    return (
    	<Router>
    		<div style={style.everything}>
    			<BootNavBar />
    			<Switch>
	      		<Route exact path="/" component={Landing}/>
	      		<Route path="/newsmoke" component={NewSmoke} />
            <Route path="/newsmokeinfo" component={NewSmokeInfo} />
      		</Switch>
      	</div>
      </Router>
    );
  }
}

export default App;
