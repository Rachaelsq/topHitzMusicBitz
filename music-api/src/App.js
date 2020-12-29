import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Product from './components/Product';




//mine



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

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     )
//   }
// }

export default App;
