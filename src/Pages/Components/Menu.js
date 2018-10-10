import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./styles.scss";

export const MenuOptions = {
  ABOUT: "about",
  PHOTOGRAPHY: "photography",
  PORTFOLIO: "portfolio",
  LINKEDIN: "linkedin",
  GITHUB: "github",
  CONTACT: "contact"
};

export class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      headerActive: 0,
      shouldRender: false
    };
  }

  getHeaderStatus = headerIndex => {
    return this.state.headerActive === headerIndex ? "in" : "out";
  };

  render() {
    const { currentTab, onPreviousClick, onNextClick } = this.props;

    return (
      <div className="menu">
        <div className="mobile-menu">
          <span className="mobile-name">JONATHAN BURSZTYN</span>
        </div>
        <div className={styles.leftColumn}>
          <Link to="/">
            <div className="cd-headline rotate-3">
              <span
                className="cd-words-wrapper initials"
                style={{ width: "180px" }}
                onMouseEnter={() => {
                  this.setState({ headerActive: 1, shouldRender: true });
                }}
                onMouseLeave={() => {
                  this.setState({ headerActive: 0 });
                }}
              >
                <span>
                  <i className={this.getHeaderStatus(0)}>j</i>
                  <i className={this.getHeaderStatus(0)}>b</i>
                </span>
                {this.state.shouldRender && (
                  <span
                    className="full-name"
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
                )}
              </span>
            </div>
          </Link>

          <div className="links">
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
                rel="noopener noreferrer"
                className="links-linkedin"
              >
                {MenuOptions.LINKEDIN}
              </a>
            </div>
            <div className="links-github-wrapper">
              <a
                href="https://github.com/jonybur"
                target="_blank"
                rel="noopener noreferrer"
                className="links-github"
              >
                {MenuOptions.GITHUB}
              </a>
            </div>
            <div className="links-contact-wrapper">
              <a
                href="mailto:jonathan@bursz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="links-contact"
              >
                {MenuOptions.CONTACT}
              </a>
            </div>
            <div className="links-photography-wrapper">
              <Link
                to={`/${MenuOptions.PHOTOGRAPHY}`}
                className="links-photography"
                style={{
                  opacity: currentTab === MenuOptions.PHOTOGRAPHY ? 0.5 : 1
                }}
              >
                photography
              </Link>
            </div>
          </div>
          <div
            className="footer"
            style={{
              opacity:
                currentTab === MenuOptions.PHOTOGRAPHY ||
                currentTab === MenuOptions.PORTFOLIO
                  ? 1
                  : 0
            }}
          >
            <span onClick={onPreviousClick} className="footer-button">
              prev{" "}
            </span>
            /{" "}
            <span onClick={onNextClick} className="footer-button">
              next
            </span>
          </div>
        </div>
      </div>
    );
  }
}
