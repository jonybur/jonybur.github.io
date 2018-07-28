import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./styles.css";
import Menu from "../Components/Menu";

export class About extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Menu />
        <div className="about-wrapper">
          <div className="about">
            <p className="intro">Hello,</p>{" "}
            <p>
              My name is <span className="bold">Jonathan Bursztyn</span>. I’m a
              Software Engineer from Argentina, currently working at{" "}
              <a href="">Salesforce</a>.
            </p>
            <p>
              I enjoy programming and designing{" "}
              <a href="">awesome websites and applications</a>, and on my spare
              time I indulge in photography.
            </p>
            <p>
              If you’d like to reach me, please <a href="">shoot me an email</a>.
            </p>
            <p>
              ... or you can just check out <a href="">my photographs</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
