import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Log from"./components/Log";


const App = () => (
  <Router>
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Log} />
      <Route exact path="/nav" component={Nav} />
      <Route exact path="/log" component={Log} />
    </Switch>
  </div>
</Router>
);

export default App;
