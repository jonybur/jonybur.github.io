import React, { Component, PureComponent } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import YouTube from 'react-youtube';
import styles from './styles.css';

export class Home extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <h1>Hey there,</h1>
            <p>My name is Jonathan Bursztyn,</p>
            <p>I'm a Software Engineer at <a href="https://www.mulesoft.com" target="_blank">MuleSoft</a>.</p>
            {/*<p>During my free time I enjoy <Link to="/photography">photography</Link>.</p>*/}
          </div>
          <div className="links">
            {/*<Link to="/portfolio">Portfolio</Link>*/}
            <a href="https://www.github.com/jonybur" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/jonybur" target="_blank">LinkedIn</a>
            <a href="mailto:jonathan@bursz.com" target="_blank">Contact</a>
          </div>
          {/*<img className="mac" src="mac.png" alt="Mountain View"></img>
          <YouTube
            video="W9sxKjq44AA"
            autoplay={true}
            className="video"
          />*/}
        </div>
      </div>
    );
  }
}
