import React from "react";
import "./Patient.css";


const Patient = props => (

  <div className="time">
      

    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> 
        </li>
        <li>
          <strong>Last name:</strong> 
        </li>
        <li>
          <strong>Room:</strong>
        </li>
      </ul>
      <h3> Book your appoinment </h3>
    </div>
    <div className="shedule">
   
    </div>


  </div>
);


export default Patient;
