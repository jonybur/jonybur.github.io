import React, { Component, PureComponent } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import styles from "./styles.css";

export class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      headerActive: 0
    };
    /*
    setInterval(() => {
      const { headerActive } = this.state;
      if (headerActive >= 1) {
        this.setState({ headerActive: 0 });
      } else {
        this.setState({ headerActive: headerActive + 1 });
      }
    }, 3000);*/
  }

  getHeaderStatus = headerIndex => {
    return this.state.headerActive === headerIndex ? "in" : "out";
  };

  render() {
    return (
      <div className="wrapper">
        <div className="leftColumn">
          <div className="cd-headline rotate-3">
            <span
              className="cd-words-wrapper initials"
              onMouseEnter={() => {
                this.setState({ headerActive: 1 });
              }}
              onMouseLeave={() => {
                this.setState({ headerActive: 0 });
              }}
            >
              <span>
                <i className={this.getHeaderStatus(0)}>j</i>
                <i className={this.getHeaderStatus(0)}>b</i>
              </span>
              <span
                className="fullName"
                onMouseEnter={() => {
                  this.setState({ headerActive: 1 });
                }}
                onMouseLeave={() => {
                  this.setState({ headerActive: 0 });
                }}
              >
                <i className={this.getHeaderStatus(1)}>j</i>
                <i className={this.getHeaderStatus(1)}>o</i>
                <i className={this.getHeaderStatus(1)}>n</i>
                <i className={this.getHeaderStatus(1)}>a</i>
                <i className={this.getHeaderStatus(1)}>t</i>
                <i className={this.getHeaderStatus(1)}>h</i>
                <i className={this.getHeaderStatus(1)}>a</i>
                <i className={`${this.getHeaderStatus(1)} charspace`}>n</i>
                <i className={this.getHeaderStatus(1)}>b</i>
                <i className={this.getHeaderStatus(1)}>u</i>
                <i className={this.getHeaderStatus(1)}>r</i>
                <i className={this.getHeaderStatus(1)}>s</i>
                <i className={this.getHeaderStatus(1)}>z</i>
                <i className={this.getHeaderStatus(1)}>t</i>
                <i className={this.getHeaderStatus(1)}>y</i>
                <i className={this.getHeaderStatus(1)}>n</i>
              </span>
            </span>
          </div>
          {/*<span className="initials">jb</span>*/}

          <div className="links">
            <div className="links-portfolio-wrapper">
              <a href="" className="links-portfolio">
                portfolio
              </a>
            </div>
            <div className="links-linkedin-wrapper">
              <a href="" className="links-linkedin">
                linkedin
              </a>
            </div>
            <div className="links-github-wrapper">
              <a href="" className="links-github">
                github
              </a>
            </div>
            <div className="links-photography-wrapper">
              <a href="" className="links-photography">
                photography
              </a>
            </div>
          </div>
          <div className="footer">a</div>
        </div>
        <div className="photo-wrapper">
          <img className="photo" src={"photo.jpg"} alt="Vintage Macintosh" />
        </div>
      </div>
    );
  }
}
