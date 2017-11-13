import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export class Photography extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1>Photography,</h1>
        </div>
        <div className="links">
          <Router>
            <Link to="/">Home</Link>
          </Router>
        </div>
      </div>
    );
  }
}
