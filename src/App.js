import React from 'react'
// import { NavbarBrand } from 'react-bootstrap';
import './App.css';
import  Navbar from "./components/Navbar/Navbar.js"

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from "./pages"
import SignInPage from './pages/signin';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignInPage} exact />
        </Switch>
      </Router>
    </div>  
  );
}

export default App;
