import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./styles.css";
import Menu from "../Components/Menu";

export class Home extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Menu />
        <div className="photo-wrapper">
          <img className="photo" src={"photo.jpg"} alt="Vintage Macintosh" />
        </div>
      </div>
    );
  }
}
