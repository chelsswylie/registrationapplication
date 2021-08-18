import React, { Component } from "react";
import "./App.css";
import form from "./Components/form";
import navbar from "./Components/navbar";
import admin from "./Components/adminpage";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/navbar" component={navbar}>
          <navbar />
        </Link>
        <Link to="/form" component={form}>
          <form />
        </Link>
        <switch>
          <Link to="/admin" component={admin}></Link>
          <admin />
        </switch>
      </Router>
    </div>
  );
}

export default App;
