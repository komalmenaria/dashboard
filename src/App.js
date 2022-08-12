import './App.css';
import './Css/style.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Details from './Components/Details';
import Dashplant from './Components/Dashplant';



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Dashplant />
    <Switch>
          <Route exact path="/dashplant">
          <Dashplant />
          </Route>
          <Route exact path="/details">
           <Details />
          </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
