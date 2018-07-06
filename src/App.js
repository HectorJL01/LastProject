import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Log from "./components/Log";
import Staff from "./components/Staff";
import Patient from "./components/Patient"
import staff from "./staff.json";


const App = () => (
  <Router>
    <div>
    
      <Switch>
        <Route exact path="/log" component={Log} />
        <Route exact path="/nav" component={Nav} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/patient" component={Patient} />
      </Switch>
    </div>
  </Router>
);

export default App;
