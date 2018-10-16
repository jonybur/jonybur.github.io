import React, { PureComponent } from "react";
import styles from "./styles.module.css";
import { Menu, MenuOptions } from "../Components/Menu";
import { MozartLoader } from "./MozartLoader/MozartLoader";
import mozartImage from "./images/mozart/1.png";
import recargapayImage from "./images/recargapay/1.png";
import nejcImage1 from "./images/nejc/8.png";
import nejcImage2 from "./images/nejc/1.png";
import nejcImage3 from "./images/nejc/4.png";
import nejcImage4 from "./images/nejc/2.png";
import nejcImage5 from "./images/nejc/5.png";
import nejcImage6 from "./images/nejc/7.png";
import baisImage from "./images/bais/1.png";
import cannabitImage from "./images/cannabit/1.png";

export class Portfolio extends PureComponent {
  createProject = (
    name,
    role,
    descriptionHeader,
    descriptionBody,
    mediaElements
  ) => {
    return { name, role, descriptionHeader, descriptionBody, mediaElements };
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
        "Software Engineering & Design",
        "Integration flows made easy",
        [
          `Flow Designer is a simple, web-based interface for designing Mule applications for Anypoint Platform.
          Users can create integrations and 'flows' of data without needing to code.`,
          `My primary job is to develop the UI utilizing React + Redux with the engineering team;
          and collaborate with designs and prototypes with the UX team.`,
          `We have a special focus on layer separation, coverage, unit and component tests - with pipelines for CI/CD.`
        ],
        <div>
          <img className={styles.mozartImage} src={mozartImage} alt="Mozart" />
          <MozartLoader />
        </div>
      ),
      this.createProject(
        "North End Juice Co.",
        "Brand Identity Design",
        "Smoothies with a vibe",
        [
          `Created the brand design identity, logos and packaging for Richmond's #1 juice bar. This popular joint is the go-to place to get fresh-pressed juices, açaí bowls, smoothies, to-go salads, hummus and baked empanadas while in Virginia.`,
          `North End Juice Co. offers plenty of vegan and gluten-free friendly items. And is a brand dedicated to providing the people of Richmond with quality made-in-house fare.`
        ],
        <div className={styles.northEndWrapper}>
          <div className={styles.northEndRow}>
            <img
              className={`${styles.nejcImage} ${styles.nejcImage1}`}
              src={nejcImage1}
              alt="North End Juice Co. 1"
            />
            <img
              className={`${styles.nejcImage} ${styles.nejcImage2}`}
              src={nejcImage2}
              alt="North End Juice Co. 2"
            />
          </div>
          <div className={styles.northEndRow}>
            <img
              className={`${styles.nejcImage} ${styles.nejcImage3}`}
              src={nejcImage3}
              alt="North End Juice Co. 3"
            />
            <img
              className={`${styles.nejcImage} ${styles.nejcImage4}`}
              src={nejcImage4}
              alt="North End Juice Co. 4"
            />
          </div>
          <div className={styles.northEndRow}>
            <img
              className={`${styles.nejcImage} ${styles.nejcImage5}`}
              src={nejcImage5}
              alt="North End Juice Co. 5"
            />
            <img
              className={`${styles.nejcImage} ${styles.nejcImage6}`}
              src={nejcImage6}
              alt="North End Juice Co. 6"
            />
          </div>
        </div>
      ),
      this.createProject(
        "RecargaPay",
        "Lead iOS Development",
        "Innovating mobile payments",
        [
          `With over 10 million users in Brazil, RecargaPay is one of the most used mobile payment solutions in the continent.
          The app allows its users to pay digital services such as prepaid mobile top-ups,
          bill payments, gift cards, public transport cards and peer to peer payments without needing a bank account.`,
          `My primary duty was to maintain the iOS app adding new features such as a system for premium subscriptions, among other enhancements.`
        ],
        <img
          className={`${styles.recargaPayImage}`}
          src={recargapayImage}
          alt="RecargaPay"
        />
      ),
      this.createProject(
        "BAIS",
        "iOS Development & Design",
        "Connecting students in Buenos Aires",
        [
          `BAIS (acronym for Buenos Aires International Students) is the biggest exchange student NGO in Argentina.
        Each semester over 10.000 students from all around the world attend at least one of their events that go
        from roadtrips to clubbing. It is a kind of "home away from home" for this type of travelers.`,
          `The app provided a social platform from which students could meet and chat with other students
        residing in the same area.`
        ],
        <img
          className={`${styles.recargaPayImage}`}
          src={baisImage}
          alt="BAIS"
        />
      ),
      this.createProject(
        "Cannabit",
        "Xamarin Development & Design",
        "Decentralizing markets",
        [
          `Cannabit was meant to become the Thomson Reuters of the cannabis industry. An ambitious project, with notable features that included to match up growers, distributors, real estate developers, doctors, researchers, journalists and investors to create an empowered market deal flow that included the utilization of blockchain technologies such as Ethereum.`,
          `Worked in a team comprised of over 10 Silicon Valley veterans from which I had valuable entrepreneurship lessons. Was in charge of the entire frontend development, UI & UX design and prototyping.`
        ],
        <img
          className={`${styles.recargaPayImage}`}
          src={cannabitImage}
          alt="Cannabit"
        />
      ) /*,
      this.createProject(
        "Baru",
        "Development & Design",
        "Smoothies with a vibe",
        []
      ),
      this.createProject(
        "Board",
        "Development & Design",
        "Smoothies with a vibe",
        []
      )*/
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
      <div className={styles.wrapper}>
        <Menu
          currentTab={MenuOptions.PORTFOLIO}
          onPreviousClick={this.onPreviousClick}
          onNextClick={this.onNextClick}
        />
        <div className={styles.portfolioWrapper}>
          <div className={styles.columnWrapper}>
            <div className={styles.portfolioLeftColumn}>
              <div className={styles.portfolioHeader}>
                <span className={styles.appName}>
                  {projects[currentProject].name}
                </span>
                <span className={styles.appRole}>
                  {projects[currentProject].role}
                </span>
                <div className={styles.appDivider} />
              </div>
              <div className={styles.portfolioBody}>
                <span className={styles.appDescriptionHeader}>
                  {projects[currentProject].descriptionHeader}
                </span>
                {projects[currentProject].descriptionBody.map(body => (
                  <p className={styles.appDescriptionBody}>{body}</p>
                ))}
              </div>
            </div>
            <div className={styles.portfolioRightColumn}>
              {projects[currentProject].mediaElements}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
