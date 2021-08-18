import React, { Component, useState } from "react";
// import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      Address1: "",
      Address2: "",
      City: "",
      State: "",
      Zip: null,
      Country: "US",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleValidation = this.handleValidation.bind(this);
  }

  // function createNew() {
  //   const [input, setInput] = useState({
  //     firstName: "",
  //     lastName: "",
  //     Address1: "",
  //     Address2: "",
  //     City: "",
  //     State: "",
  //     Zip: null,
  //     Country: "US",
  //   })
  // }

  handleChange(event) {
    console.log(event.target);
  }

  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  lasthandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  address1 = (event) => {
    this.setState({
      addressOne: event.target.value,
    });
  };

  addresstwo = (event) => {
    this.setState({
      addressTwo: event.target.value,
    });
  };

  cityarea = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  statearea = (event) => {
    this.setState({
      state: event.target.value,
    });
  };

  ziparea = (event) => {
    this.setState({
      zip: event.target.value,
    });
  };

  countryarea = (event) => {
    // const actions = [{ label: "US", value: 1 }];
    this.setState({
      country: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`
    );
    console.log(this.state);

    event.preventDefault();
    const newRegistration = {
      firstName: this.firsthandler.firstName,
      lastName: this.lasthandler.lastName,
      Address1: this.addressone.Address1,
      Address2: this.addresstwo.Address2,
      City: this.cityarea.City,
      State: this.statearea.State,
      Zip: this.ziparea.Zip,
      Country: this.countryarea.Country,
    };

    axios.post("http://localhost:3001/create", newRegistration);
  };

  render() {
    return (
      <div class="body">
        <form onSubmit={this.handleSubmit}>
          <h1>User Registration</h1>
          <label>First Name:</label> <br></br>
          <input
            type="text"
            ref={(ref) => {
              this.uploadInput = ref;
            }}
            value={this.state.firstName}
            // validateFields={validateFields}
            onChange={this.firsthandler}
            // onChange={handleChange}
            placeholder="First Name"
          />
          <br />
          <label>Last Name:</label> <br></br>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lasthandler}
            // onChange={handleChange}
            placeholder="Last Name"
          />
          <br />
          <label>Address 1:</label> <br></br>
          <input
            type="text"
            value={this.state.add}
            onChange={this.addressone}
            // onChange={handleChange}
            placeholder="Address"
          />
          <br />
          <label>Address 2:</label> <br></br>
          <input
            type="text"
            value={this.state.add}
            onChange={this.addresstwo}
            // onChange={handleChange}
            placeholder="Address"
          />
          <br />
          <label>City:</label> <br></br>
          <input
            type="text"
            value={this.state.add}
            // onChange={handleChange}
            onChange={this.cityarea}
            placeholder="City"
          />
          <br />
          <label>State:</label> <br></br>
          <input
            type="text"
            value={this.state.add}
            // onChange={handleChange}
            onChange={this.statearea}
            placeholder="State"
          />
          <br />
          <label>ZIP:</label> <br></br>
          <input
            type="text"
            value={this.state.add}
            // onChange={handleChange}
            onChange={this.ziparea}
            placeholder="ZIP"
            maxLength="9"
            minLength="5"
          />
          <br />
          <label>Country:</label> <br></br>
          <div
            class="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="actions"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            US
          </div>
          {/* <input
            type="text"
            value={this.state.add}
            onChange={this.countryarea}
            placeholder="Country"
          /> */}
          <br />
          <input id="submit" type="submit" value="Submit" />
          {/* When user submits form, needs to upload to MongoDB */}
        </form>
      </div>
    );
  }
}
// pointless comment
// pointless2
export default Form;
