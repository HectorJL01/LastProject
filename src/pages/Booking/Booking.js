import React from "react";
import "./Patient.css";
import Patientcar from "../../components/Patientcard/Patientcard";
import Patientschedule from "../../components/Patientschedule/Patientschedule"
import Timeline from 'react-calendar-timeline/lib'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'


const Booking = props => (

  <div>
  <Patientcar />
  <Patienschedule />


  </div>
);


export default Booking;
