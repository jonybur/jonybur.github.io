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
          <a href="" className="links-portfolio">portfolio</a>
          <a href="" className="links-linkedin">linkedin</a>
          <a href="" className="links-github">github</a>
          <a href="" className="links-photography">photography</a>
        </div>

        <div className="content-wrapper">
          <img className="content" src={"photo.jpg"} alt="Vintage Macintosh"/>
        </div>
      </div>
    );
  }
}
