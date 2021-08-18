import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import form from "./Components/form";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/form" component={form}>
          Form
        </Link>
      </Router>
    </div>
  );
}

export default App;
