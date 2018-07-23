import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./styles.css";

export default class Menu extends PureComponent {
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
    }, 10000);
    */
  }

  getHeaderStatus = headerIndex => {
    return this.state.headerActive === headerIndex ? "in" : "out";
  };

  render() {
    return (
      <div className="leftColumn">
        <Link to="/">
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
        </Link>

        <div className="links">
          <div className="links-about-wrapper">
            <Link to="/about" className="links-about">
              about
            </Link>
          </div>
          <div className="links-portfolio-wrapper">
            <a href="" className="links-portfolio">
              portfolio
            </a>
          </div>
          <div className="links-linkedin-wrapper">
            <a
              href="https://www.linkedin.com/in/jonybur/"
              target="_blank"
              className="links-linkedin"
            >
              linkedin
            </a>
          </div>
          <div className="links-github-wrapper">
            <a
              href="https://github.com/jonybur"
              target="_blank"
              className="links-github"
            >
              github
            </a>
          </div>
          {/*
          <div className="links-photography-wrapper">
            <a href="" className="links-photography">
              photography
            </a>
          </div>
          */}
          <div className="links-contact-wrapper">
            <a href="" className="links-contact">
              contact
            </a>
          </div>
        </div>
        <div className="footer">prev / next</div>
      </div>
    );
  }
}
