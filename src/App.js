import React from 'react'
// import { NavbarBrand } from 'react-bootstrap';
import './App.css';
import  Navbar from "./components/Navbar/Navbar.js"

import Navbar2 from "./components/Navbar2"
import { BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Navbar2 />
      </Router>
    </div>  
  );
}

export default App;
