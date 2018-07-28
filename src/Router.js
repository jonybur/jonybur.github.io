import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { styles } from "./Router.css";

class MainRouter extends PureComponent {
  render() {
    return (
      <Router className="router">
        <div className="router">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default MainRouter;
