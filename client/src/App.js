import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewReport from "./pages/NewReport";
import NewUser from "./pages/NewUser";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new-report" component={NewReport} />
          <Route exact path="/new-user" component={NewUser} />
        </Switch>
      </Router>
    );
  }
}

export default App;
