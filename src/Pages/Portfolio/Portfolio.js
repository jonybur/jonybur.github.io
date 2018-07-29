import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./styles.css";
import { Menu, MenuOptions } from "../Components/Menu";

export class Portfolio extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Menu currentTab={MenuOptions.PORTFOLIO} />
        <div className="portfolio-wrapper">e</div>
      </div>
      /*
      1: Board (Xamarin)
      2: Baru/Cannabit (Xamarin)
      3: BAIS (iOS)
      4: Previando
      5: RecargaPay
      6: Design Center
      7: North End Juice Co. (design)
      */
    );
  }
}
