import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './card';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import { robot } from './robot'

ReactDOM.render(
   <App/>
, document.getElementById('root'));

serviceWorker.unregister();