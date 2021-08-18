import React from "react";
import { Link } from "react-router-dom";
import admin from "./adminpage";
function Navbar() {
  return (
    <nav className="navbar bg-light container">
      <h3>
        <Link to="admin">Administration</Link>
      </h3>
    </nav>
  );
}

export default Navbar;
// import React, { Component } from "react";
// import {
//   Collapse,
//   Nav,
//   Navbar,
//   NavbarBrand,
//   NavbarToggler,
//   NavItem,
//   NavLink,
// } from "reactstrap";
// import admin from "./adminpage";
// // import registration from "./registrationlist";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// export default class AppNavbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isOpen: false };
//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <a alt="ADMIN" href="/admin" component={admin}>
//           Admin
//         </a>
//       </div>

//       // <Navbar color="dark" dark expand="md">
//       //   <NavbarBrand tag={Link} to="/admin" component={admin}>
//       //     Click here for Administration Report
//       //   </NavbarBrand>
//       //   <NavbarToggler onClick={this.toggle} />
//       //   <Collapse isOpen={this.state.isOpen} navbar>
//       //     {/* <Nav className="ml-auto" navbar>
//       //       <NavItem>
//       //         <NavLink href="https://loizenai.com">loizenai.com</NavLink>
//       //       </NavItem>
//       //       <NavItem>
//       //         <NavLink href="https://github.com/loizenai">GitHub</NavLink>
//       //       </NavItem>
//       //     </Nav> */}
//       //   </Collapse>
//       // </Navbar>
//     );
//   }
// }
