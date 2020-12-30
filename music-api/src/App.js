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
import GenrePage from './components/GenrePage';
import HomePage from './HomePage'
//mine
// import {ButtonContainer} from './Button'




function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/genrepage" component={GenrePage} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      <div>  
      <h1>  
Top Hitz   footer app.js   </h1>  



    </div> 



    </React.Fragment>
    //
    
    //
  );
}






























export default App;
