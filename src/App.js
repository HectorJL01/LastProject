import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Log from "./components/Log";
import Staff from "./pages/Staff";
import Patient from "./pages/Patient"
import Schedule from "./components/Schedule";
import Booking from "./pages/Booking";

import Timeline from 'react-calendar-timeline/lib'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment';



const App = () => (
  <Router>
    <div>
      <Nav />
      {/* <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    /> */}
      
      <Switch>
        <Route exact path="/log" component={Log} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/patient" component={Patient} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/booking" component={Booking} />
      </Switch>
    </div>
  </Router>
);

export default App;
