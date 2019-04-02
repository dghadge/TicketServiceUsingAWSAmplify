import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports"

Amplify.configure(aws_exports);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
