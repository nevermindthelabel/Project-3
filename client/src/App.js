import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewReport from "./pages/NewReport";
import NewUser from "./pages/NewUser";
import Login from './components/Login/index';
// import './App.css';

const Logout = () => (
  <Logout />
);

const Login = () => (
  <Login />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={Login} /> 
          <Route exact path="/" component={Logout} />
        </div>
      </Router>
    );
  }
}

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
