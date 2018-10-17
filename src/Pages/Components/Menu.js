import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

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
    return this.state.headerActive === headerIndex ? styles.in : styles.out;
  };

  render() {
    const {
      currentTab,
      onPreviousClick,
      onNextClick,
      showMobileMenu = true
    } = this.props;

    return (
      <div className={styles.menu}>
        <div
          className={styles.mobileMenu}
          style={{ display: !showMobileMenu && "none" }}
        >
          <Link to="/" className={styles.mobileName}>
            JONATHAN BURSZTYN
          </Link>
        </div>
        <div className={styles.leftColumn}>
          <Link to="/">
            <div className={`${styles.cdHeadline} ${styles.rotate3}`}>
              <span
                className={`${styles.cdWordsWrapper} ${styles.initials}`}
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
                    className={styles.fullName}
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
                    <i
                      className={`${this.getHeaderStatus(1)} ${
                        styles.charspace
                      }`}
                    >
                      n
                    </i>
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

          <div className={styles.links}>
            <div className={styles.linksPortfolioWrapper}>
              <Link
                to={`/${MenuOptions.PORTFOLIO}`}
                className={styles.linksPortfolio}
                style={{
                  opacity: currentTab === MenuOptions.PORTFOLIO ? 0.5 : 1
                }}
              >
                {MenuOptions.PORTFOLIO}
              </Link>
            </div>
            <div className={styles.linksLinkedInWrapper}>
              <a
                href="https://www.linkedin.com/in/jonybur/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linksLinkedIn}
              >
                {MenuOptions.LINKEDIN}
              </a>
            </div>
            <div className={styles.linksGitHubWrapper}>
              <a
                href="https://github.com/jonybur"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linksGitHub}
              >
                {MenuOptions.GITHUB}
              </a>
            </div>
            <div className={styles.linksContactWrapper}>
              <a
                href="mailto:jonathan@bursztyn.io"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linksContact}
              >
                {MenuOptions.CONTACT}
              </a>
            </div>
            <div className={styles.linksPhotographyWrapper}>
              <Link
                to={`/${MenuOptions.PHOTOGRAPHY}`}
                className={styles.linksPhotography}
                style={{
                  opacity: currentTab === MenuOptions.PHOTOGRAPHY ? 0.5 : 1
                }}
              >
                photography
              </Link>
            </div>
          </div>
          <div
            className={styles.footer}
            style={{
              opacity:
                currentTab === MenuOptions.PHOTOGRAPHY ||
                currentTab === MenuOptions.PORTFOLIO
                  ? 1
                  : 0
            }}
          >
            <span onClick={onPreviousClick} className={styles.footerButton}>
              prev{" "}
            </span>
            /{" "}
            <span onClick={onNextClick} className={styles.footerButton}>
              next
            </span>
          </div>
        </div>
      </div>
    );
  }
}
