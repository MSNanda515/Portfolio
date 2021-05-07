import React from 'react'
// import { NavbarBrand } from 'react-bootstrap';
import './App.css';
import  Navbar from "./components/Navbar/Navbar.js"

import { BrowserRouter as Router} from 'react-router-dom'

import Home from "./pages"

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Home />
      </Router>
    </div>  
  );
}

export default App;
