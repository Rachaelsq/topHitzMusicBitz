import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstap/dist/css/bootstrap.min.css';
// import 'bootstrap';




//mine



function App() {
  return (
    <React.Fragment>
      <h3>hello forom app</h3>
      <div className="container py-4">  
      <h1 className="text-center text-uppercase">  
        Welcome to react app development  
      </h1>  
      <div>  
        <h3>Bootstrap 4 Buttons</h3>  
        <button type="button" className="btn btn-primary rounded-0">  
          Primary  
        </button>  
        <button type="button" className="btn btn-secondary rounded-0">  
          Secondary  
        </button>  
        <button type="button" className="btn btn-light rounded-0">  
          Light  
        </button>  
        <button type="button" className="btn btn-danger rounded-0">  
          Danger  
        </button>  
        <button type="button" className="btn btn-success rounded-0">  
          Success  
        </button>  
        <button type="button" className="btn btn-info rounded-0">  
          info  
        </button>  
        <button type="button" className="btn btn-warning rounded-0">  
          Warning  
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
