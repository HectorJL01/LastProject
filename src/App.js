import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Log from "./components/Log";
import Staff from "./components/Staff";
import Patient from "./components/Patient"
import Shedule from "./components/Schedule/Schedule";



const App = () => (
  <Router>
    <div>
    
      <Switch>
        <Route exact path="/log" component={Log} />
        <Route exact path="/nav" component={Nav} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/patient" component={Patient} />
        <Route exact path="/schedule" component={Schedule} />
      </Switch>
    </div>
  </Router>
);

export default App;
