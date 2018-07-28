import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./styles.css";

export const MenuOptions = {
  HOME: "home",
  ABOUT: "about",
  PORTFOLIO: "portfolio",
  LINKEDIN: "linkedin",
  GITHUB: "github",
  CONTACT: "contact"
};

export class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      headerActive: 0
    };
  }

  getHeaderStatus = headerIndex => {
    return this.state.headerActive === headerIndex ? "in" : "out";
  };

  render() {
    const { currentTab } = this.props;

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
            <Link
              to={`/${MenuOptions.ABOUT}`}
              className="links-about"
              style={{
                opacity: currentTab === MenuOptions.ABOUT ? 0.5 : 1
              }}
            >
              {MenuOptions.ABOUT}
            </Link>
          </div>
          <div className="links-portfolio-wrapper">
            <Link
              to={`/${MenuOptions.PORTFOLIO}`}
              className="links-portfolio"
              style={{
                opacity: currentTab === MenuOptions.PORTFOLIO ? 0.5 : 1
              }}
            >
              {MenuOptions.PORTFOLIO}
            </Link>
          </div>
          <div className="links-linkedin-wrapper">
            <a
              href="https://www.linkedin.com/in/jonybur/"
              target="_blank"
              className="links-linkedin"
            >
              {MenuOptions.LINKEDIN}
            </a>
          </div>
          <div className="links-github-wrapper">
            <a
              href="https://github.com/jonybur"
              target="_blank"
              className="links-github"
            >
              {MenuOptions.GITHUB}
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
            <a
              href="mailto:jobur93@gmail.com"
              target="_blank"
              className="links-contact"
            >
              {MenuOptions.CONTACT}
            </a>
          </div>
        </div>
        <div
          className="footer"
          style={{
            opacity: currentTab === MenuOptions.HOME ? 1 : 0
          }}
        >
          prev / next
        </div>
      </div>
    );
  }
}
