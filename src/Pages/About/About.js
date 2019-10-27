import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Menu, MenuOptions } from "../Components/Menu";

export class About extends PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <Menu currentTab={MenuOptions.ABOUT} showMobileMenu={false} />
        <div className={styles.aboutWrapper}>
          <div className={styles.about}>
            <p>Hello,</p>
            <p>
              My name is Jonathan Bursztyn. I’m a Full Stack Software Engineer
              in London, UK - currently working at{" "}
              <a
                href="https://www.yieldify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Yieldify
              </a>
              .
            </p>
            <p>
              I enjoy programming and designing{" "}
              <Link to={`/${MenuOptions.PORTFOLIO}`} className={styles.link}>
                awesome web and mobile applications
              </Link>
              , and during my spare time I indulge in photography.
            </p>
            <p>
              If you would like to reach me, please{" "}
              <a
                href="mailto:jonathan@bursztyn.io"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                shoot me an email
              </a>
              .
            </p>
            <p>
              ... or you can just check out{" "}
              <Link to="/photography" className={styles.link}>
                my photographs
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}
