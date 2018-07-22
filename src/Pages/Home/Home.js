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
        <div className="links">
          <div className="links-1">
            <a href="" className="links-portfolio">portfolio</a>
          </div>
          <div className="links-2">
            <a href="" className="links-linkedin">linkedin</a>
          </div>
          <div className="links-3">
            <a href="" className="links-github">github</a>
          </div>
          <div className="links-4">
            <a href="" className="links-photography">photography</a>
          </div>
        </div>
        <div className="content-wrapper">
          <img className="content" src={"photo.jpg"} alt="Vintage Macintosh"/>
        </div>
      </div>
    );
  }
}
