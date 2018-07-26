import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Amplify from "aws-amplify";
import config from "./config";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
