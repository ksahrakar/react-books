import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Books from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import NavBar from "./Components/NavBar";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/Saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
