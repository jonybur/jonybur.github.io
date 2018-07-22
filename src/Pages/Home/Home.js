import React, { Component, PureComponent } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styles from './styles.css';

export class Home extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="leftColumn">
          <span className="initials">jb</span>
          <div className="links"> 
              <div className="links-portfolio-wrapper">
                <a href="" className="links-portfolio">portfolio</a>
              </div>
              <div className="links-linkedin-wrapper">
                <a href="" className="links-linkedin">linkedin</a>
              </div>
              <div className="links-github-wrapper">
                <a href="" className="links-github">github</a>
              </div>
              <div className="links-photography-wrapper">
                <a href="" className="links-photography">photography</a>
              </div>
          </div>
          <div className="footer">a</div>
        </div>
        <div className="photo-wrapper">
          <img className="photo" src={"photo.jpg"} alt="Vintage Macintosh"/>
        </div>
      </div>
    );
  }
}
