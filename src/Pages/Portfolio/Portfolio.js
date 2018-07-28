import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./styles.css";
import { Menu, MenuOptions } from "../Components/Menu";

export class Portfolio extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Menu currentTab={MenuOptions.PORTFOLIO} />
        <div className="portfolio-wrapper" />
      </div>
    );
  }
}
