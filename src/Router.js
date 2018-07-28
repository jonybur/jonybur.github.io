import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About } from "./Pages/About/About";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Photography } from "./Pages/Photography/Photography";
import { styles } from "./Router.css";

class MainRouter extends PureComponent {
  render() {
    return (
      <Router className="router">
        <div className="router">
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/photography" component={Photography} />
        </div>
      </Router>
    );
  }
}

export default MainRouter;
