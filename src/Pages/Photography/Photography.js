import React, { Component, PureComponent } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export class Photography extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1>Photography,</h1>
        </div>
        <div className="links">
          <Link to="/">Home</Link> 
        </div>
      </div>
    );
  }
}
