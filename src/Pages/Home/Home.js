import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styles from './styles.css';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
export class Home extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1>Hey there,</h1>
          <p>My name is Jonathan Bursztyn,</p>
          <p>I'm a Software Engineer at <a href="https://www.mulesoft.com" target="_blank">MuleSoft</a></p>
          <p>Sometimes I like taking <Router><Link to="/photography">photography</Link></Router></p>
        </div>
        <div className="links">
            <Router>
              <Link to="/portfolio">Portfolio</Link>
            </Router>
          <a href="https://www.github.com/jonybur" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/jonybur" target="_blank">LinkedIn</a>
        </div>
      </div>
    );
  }
}
