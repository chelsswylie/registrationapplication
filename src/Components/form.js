import React, { Component } from "react";

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
      Country: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  //   Need to add rule for below to only allow US
  countryarea = (event) => {
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
    data.append("Address1", this.Address1.value);
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>User Registration</h1>
          <label>FirstName :</label>{" "}
          <input
            type="text"
            ref={(ref) => {
              this.uploadInput = ref;
            }}
            value={this.state.firstName}
            onChange={this.firsthandler}
            placeholder="First Name"
          />
          <br />
          <label>LastName :</label>{" "}
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lasthandler}
            placeholder="Last Name"
          />
          <br />
          <label>Address 1 :</label>{" "}
          <input
            type="text"
            value={this.state.add}
            onChange={this.addressone}
            placeholder="Address"
          />
          <br />
          <label>Address 2 :</label>{" "}
          <input
            type="text"
            value={this.state.add}
            onChange={this.addresstwo}
            placeholder="Address"
          />
          <br />
          <label>City :</label>{" "}
          <input
            type="text"
            value={this.state.add}
            onChange={this.cityarea}
            placeholder="City"
          />
          <br />
          <label>State :</label>{" "}
          <input
            type="text"
            value={this.state.add}
            onChange={this.statearea}
            placeholder="State"
          />
          <br />
          <label>Zipcode :</label>{" "}
          <input
            type="text"
            value={this.state.add}
            onChange={this.ziparea}
            placeholder="ZIP"
          />
          <br />
          <label>Country :</label>{" "}
          <input
            type="text"
            value={this.state.add}
            onChange={this.countryarea}
            placeholder="Country"
          />
          <br />
          <input type="submit" value="Submit" />
          {/* When user submits form, needs to upload to MongoDB */}
        </form>
      </div>
    );
  }
}
// pointless comment
// pointless2
export default Form;
