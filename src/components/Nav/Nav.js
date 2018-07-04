import React from "react";
import {Link} from "react-router-dom";


const Nav = () => (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Patient Tracker</a>
  <Link className="navbar-brand" to="/">
  Patient Tracker
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Staff</a>
      <a className="nav-item nav-link" href="#">Patient</a>
      <a className="nav-item nav-link disabled" href="#">Booking</a>
    </div>
    
  </div>
</nav>
);

export default Nav;