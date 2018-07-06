import React from "react";
import "./Staff.css";

const Staff = props => (
  <div className="card">

  
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Deparment:</strong> {props.occupation}
        </li>
      </ul>
    </div>
        <form>
          <div class="form-row">
              <p>
              <div class="col">
                <h3> Request Patient</h3> 
              </div>
              </p>
              <div class="col">
                <input type="text" class="form-control" placeholder="First name"/> 
              </div>
              <div class="col">
              <input type="text" class="form-control" placeholder="Last name"/>
              </div>
              <div class="col">
              <input type="text" class="form-control" placeholder="Room"/>
              </div>

              <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
              </div>

          </div>
        </form>

  </div>
);


export default Staff;
