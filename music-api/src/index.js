import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductProvider} from './context'
// import * as serviceWorker from "./serviceWorker";  


ReactDOM.render(
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>, 
    document.getElementById('root')
);
