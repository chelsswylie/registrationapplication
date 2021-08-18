import React, { Component } from "react";
// import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";

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

  addressone = (event) => {
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

    this.setState({
      firstName: "",
      lastName: "",
      Address1: "",
      Address2: "",
      City: "",
      State: "",
      Zip: null,
      Country: "",
    });
    event.preventDefault();

    const data = new FormData();
    data.append("firstName", this.firstName.value);
    data.append("lastName", this.lastName.value);
    data.append("Address1", this.addressOne.value);
    data.append("Address2", this.Address2.value);
    data.append("City", this.city.value);
    data.append("State", this.state.value);
    data.append("Zip", this.zip.value);
    data.append("Country", this.Country.value);

    fetch("http://localhost:4000/upload", {
      method: "POST",
      body: data,
    }).then((response) => {
      response.json().then((body) => {});
    });
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
            placeholder="First Name"
          />
          <br />
          <label>Last Name:</label> <br></br>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lasthandler}
            placeholder="Last Name"
          />
          <br />
          <label>Address 1:</label> <br></br>
          <input
            type="text"
            value={this.state.add}
            onChange={this.addressone}
            placeholder="Address"
          />
          <br />
          <label>Address 2:</label> <br></br>
          <input
            type="text"
            value={this.state.add}
            onChange={this.addresstwo}
            placeholder="Address"
          />
          <br />
          <label>City:</label> <br></br>
          <input
            type="text"
            value={this.state.add}
            onChange={this.cityarea}
            placeholder="City"
          />
          <br />
          <label>State:</label> <br></br>
          <input
            type="text"
            value={this.state.add}
            onChange={this.statearea}
            placeholder="State"
          />
          <br />
          <label>ZIP:</label> <br></br>
          <input
            type="text"
            value={this.state.add}
            onChange={this.ziparea}
            placeholder="ZIP"
            maxLength="9"
            minLength="5"
          />
          <br />
          <label>Country :</label> <br></br>
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
