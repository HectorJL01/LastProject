import React from "react";


const Log = () => (
    
    <form className="dropdown-menu p-4">
        <div className="form-group">
                <label htmlFor="exampleDropdownFormEmail2">Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
        </div>
        <div className="form-group">
                <label htmlFor="exampleDropdownFormPassword2">Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
                <label className="form-check-label" htmlFor="dropdownCheck2">
                Remember me
            </label>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
    </form>

);

export default Log;

// import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import "./Login.css";

// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className="Login">
//         <form onSubmit={this.handleSubmit}>
//           <FormGroup controlId="email" bsSize="large">
//             <ControlLabel>Email</ControlLabel>
//             <FormControl
//               autoFocus
//               type="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup controlId="password" bsSize="large">
//             <ControlLabel>Password</ControlLabel>
//             <FormControl
//               value={this.state.password}
//               onChange={this.handleChange}
//               type="password"
//             />
//           </FormGroup>
//           <Button
//             block
//             bsSize="large"
//             disabled={!this.validateForm()}
//             type="submit"
//           >
//             Login
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }