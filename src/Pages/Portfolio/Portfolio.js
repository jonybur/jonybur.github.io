import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./styles.css";
import { Menu, MenuOptions } from "../Components/Menu";

export class Portfolio extends PureComponent {
  createProject = (name, role, descriptionHeader, descriptionBody) => {
    return { name, role, descriptionHeader, descriptionBody };
  };

  /*
  7: North End Juice Co. (design)
  6: Design Center
  5: RecargaPay
  3: BAIS (iOS)
  2: Baru/Cannabit (Xamarin)
  1: Board (Xamarin)
  */

  constructor(props) {
    super(props);

    const projects = [
      this.createProject(
        "Flow Designer",
        "Front End Development & Design",
        "Easy MuleSoft integrations",
        "Lorem ipsum, bla bla bla. Esto es un test, bla bla, y mas texto que no importa, aparte aca hay otro texto. bla bli blu. No se que escribir aca, no tengo internet y no puedo ver el lorem ipsum. Salesforce es una empresa grande y Ohana es la familia de Salesforce. Estoy programando en un vuelo de camino a Japon."
      ),
      this.createProject(
        "North End Juice Co.",
        "Brand Design",
        "Smoothies with a vibe",
        "Lorem ipsum, bla bla bla. Esto es un test, bla bla, y mas texto que no importa, aparte aca hay otro texto. bla bli blu. No se que escribir aca, no tengo internet y no puedo ver el lorem ipsum. Salesforce es una empresa grande y Ohana es la familia de Salesforce. Estoy programando en un vuelo de camino a Japon."
      ),
      this.createProject(
        "RecargaPay",
        "Lead iOS Developer",
        "Smoothies with a vibe",
        "Lorem ipsum, bla bla bla. Esto es un test, bla bla, y mas texto que no importa, aparte aca hay otro texto. bla bli blu. No se que escribir aca, no tengo internet y no puedo ver el lorem ipsum. Salesforce es una empresa grande y Ohana es la familia de Salesforce. Estoy programando en un vuelo de camino a Japon."
      ),
      this.createProject(
        "BAIS",
        "Development & Design",
        "Smoothies with a vibe",
        "Lorem ipsum, bla bla bla. Esto es un test, bla bla, y mas texto que no importa, aparte aca hay otro texto. bla bli blu. No se que escribir aca, no tengo internet y no puedo ver el lorem ipsum. Salesforce es una empresa grande y Ohana es la familia de Salesforce. Estoy programando en un vuelo de camino a Japon."
      ),
      this.createProject(
        "Cannabit",
        "Development & Design",
        "Smoothies with a vibe",
        "Lorem ipsum, bla bla bla. Esto es un test, bla bla, y mas texto que no importa, aparte aca hay otro texto. bla bli blu. No se que escribir aca, no tengo internet y no puedo ver el lorem ipsum. Salesforce es una empresa grande y Ohana es la familia de Salesforce. Estoy programando en un vuelo de camino a Japon."
      ),
      this.createProject(
        "Baru",
        "Development & Design",
        "Smoothies with a vibe",
        "Lorem ipsum, bla bla bla. Esto es un test, bla bla, y mas texto que no importa, aparte aca hay otro texto. bla bli blu. No se que escribir aca, no tengo internet y no puedo ver el lorem ipsum. Salesforce es una empresa grande y Ohana es la familia de Salesforce. Estoy programando en un vuelo de camino a Japon."
      ),
      this.createProject(
        "Board",
        "Development & Design",
        "Smoothies with a vibe",
        "Lorem ipsum, bla bla bla. Esto es un test, bla bla, y mas texto que no importa, aparte aca hay otro texto. bla bli blu. No se que escribir aca, no tengo internet y no puedo ver el lorem ipsum. Salesforce es una empresa grande y Ohana es la familia de Salesforce. Estoy programando en un vuelo de camino a Japon."
      )
    ];

    this.state = { projects, currentProject: 0 };
  }

  onPreviousClick = () => {
    const { currentProject, projects } = this.state;
    this.setState({
      currentProject:
        currentProject <= 0 ? projects.length - 1 : currentProject - 1
    });
  };

  onNextClick = () => {
    const { currentProject, projects } = this.state;
    this.setState({
      currentProject:
        currentProject >= projects.length - 1 ? 0 : currentProject + 1
    });
  };

  render() {
    const { currentProject, projects } = this.state;

    return (
      <div className="wrapper">
        <Menu
          currentTab={MenuOptions.PORTFOLIO}
          onPreviousClick={this.onPreviousClick}
          onNextClick={this.onNextClick}
        />
        <div className="portfolio-wrapper">
          <div className="column-wrapper">
            <div className="portfolio-left-column">
              <div className="portfolio-header">
                <span className="app-name">
                  {projects[currentProject].name}
                </span>
                <span className="app-role">
                  {projects[currentProject].role}
                </span>
                <div className="app-divider" />
              </div>
              <div className="portfolio-body">
                <span className="app-description-header">
                  {projects[currentProject].descriptionHeader}
                </span>
                <p className="app-description-body">
                  {projects[currentProject].descriptionBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
