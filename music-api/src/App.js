import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom'
// import withRouter from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Product from './components/Product';
//mine
// import {ButtonContainer} from './Button'




function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      <div>  
      <h1>  
Top Hitz      </h1>  



      <div>  
        
        <button type="button" className="btn btn-secondary rounded-0">  
          Secondary  
        </button>  
        <button type="button" className="btn btn-light rounded-0">  
          Light  
        </button>  
        <button type="button" className="btn btn-info rounded-0">  
          info  
        </button>  

        <button type="button" className="btn btn-dark rounded-0">  
          Dark  
        </button>  
      </div>  
    </div> 



    </React.Fragment>
    //
    
    //
  );
}






























export default App;
