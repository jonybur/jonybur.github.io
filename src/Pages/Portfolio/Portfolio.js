import React, { PureComponent } from "react";
import styles from "./styles.module.css";
import { Menu, MenuOptions } from "../Components/Menu";
import mozartImage from "./images/mozart/1.png";
import recargapayImage from "./images/recargapay/1.png";
import nejcImage1 from "./images/nejc/8.png";
import nejcImage2 from "./images/nejc/1.png";
import nejcImage3 from "./images/nejc/4.png";
import nejcImage4 from "./images/nejc/2.png";
import nejcImage5 from "./images/nejc/5.png";
import nejcImage6 from "./images/nejc/7.png";
import baisImage from "./images/bais/1.png";
import emptyPhoneImage from "./images/bais/empty_iphone.png";
import baisScreen1 from "./images/bais/bais_screen1.png";
import baisScreen2 from "./images/bais/bais_screen2.png";
import baisScreen3 from "./images/bais/bais_screen3.png";

export class Portfolio extends PureComponent {
  /*
  7: North End Juice Co. (design)
  6: Design Center
  5: RecargaPay
  3: BAIS (iOS)
  2: Baru/Cannabit (Xamarin)
  1: Board (Xamarin)
  */

  projects = [
    {
      name: "Flow Designer",
      role: "Software Engineering & Design",
      url:
        "https://www.mulesoft.com/platform/api/flow-designer-integration-tool",
      descriptionHeader: "Integration flows made easy",
      descriptionBody: [
        `Flow Designer is a simple, web-based interface for designing Mule applications for Anypoint Platform.
      Users can create integrations and 'flows' of data without needing to code.`,
        `My primary job is to develop the UI utilizing React + Redux with the engineering team;
      and collaborate with designs and prototypes with the UX team.`,
        `We have a special focus on layer separation, coverage, unit and component tests - with pipelines for CI/CD.`
      ],
      mediaElement: (
        <img className={styles.mozartImage} src={mozartImage} alt="Mozart" />
      ),
      mobileMediaElement: (
        <img className={styles.mozartImage} src={mozartImage} alt="Mozart" />
      )
    },
    {
      name: "BAIS",
      role: "iOS Development & UI/UX Design",
      descriptionHeader: "Connecting students in Argentina",
      descriptionBody: [
        `BAIS (acronym for Buenos Aires International Students) is the biggest exchange student NGO in Argentina.
    Each semester over 10.000 students from all around the world attend at least one of their events that go
    from roadtrips to clubbing. It is a kind of "home away from home" for this type of travelers.`,
        `The app provided a social platform from which students could meet and chat with other students
    residing in the same area.`
      ],
      mediaElement: (
        <div className={styles.baisImageWrapper}>
          <img
            className={`${styles.baisIphoneWrapper}`}
            src={emptyPhoneImage}
            alt="BAIS"
          />
          <img
            className={`${styles.baisImage} ${styles.baisImage1}`}
            src={baisScreen1}
            alt="BAIS"
          />
          <img
            className={`${styles.baisImage} ${styles.baisImage2}`}
            src={baisScreen2}
            alt="BAIS"
          />
          <img
            className={`${styles.baisImage} ${styles.baisImage3}`}
            src={baisScreen3}
            alt="BAIS"
          />
        </div>
      ),
      mobileMediaElement: (
        <img className={styles.recargaPayImage} src={baisImage} alt="BAIS" />
      )
    },
    {
      name: "North End Juice Co.",
      role: "Brand Identity Design",
      descriptionHeader: "Smoothies with a vibe",
      descriptionBody: [
        `Created the brand design identity, logos and packaging for Richmond's #1 juice bar. This popular joint is the go-to place to get fresh-pressed juices, açaí bowls, smoothies, to-go salads, hummus and baked empanadas while in Virginia.`,
        `North End Juice Co. offers plenty of vegan and gluten-free friendly items. And is a brand dedicated to providing the people of Richmond with quality made-in-house fare.`
      ],
      mediaElement: (
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
      mobileMediaElement: (
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
              src={nejcImage5}
              alt="North End Juice Co. 3"
            />
            <img
              className={`${styles.nejcImage} ${styles.nejcImage4}`}
              src={nejcImage4}
              alt="North End Juice Co. 4"
            />
          </div>
        </div>
      )
    },
    {
      name: "RecargaPay",
      role: "Lead iOS Development",
      descriptionHeader: "Innovating mobile payments",
      descriptionBody: [
        `With over 10 million users in Brazil, RecargaPay is one of the most used mobile payment solutions in the continent.
      The app allows its users to pay digital services such as prepaid mobile top-ups,
      bill payments, gift cards, public transport cards and peer to peer payments without needing a bank account.`,
        `My primary duty was to maintain the iOS app adding new features such as a system for premium subscriptions, among other enhancements.`
      ],
      mediaElement: (
        <img
          className={`${styles.recargaPayImage}`}
          src={recargapayImage}
          alt="RecargaPay"
        />
      ),
      mobileMediaElement: (
        <img
          className={`${styles.recargaPayImage}`}
          src={recargapayImage}
          alt="RecargaPay"
        />
      )
    }
    /*,
    this.createProject(
      "Cannabit",
      "Xamarin Development & Design",
      "Decentralizing markets",
      [
        `Cannabit was an ambitious project, with notable features that included to match up growers, distributors, real estate developers, doctors, researchers, journalists and investors to create an empowered market deal flow that included the utilization of blockchain technologies such as Ethereum.`,
        `Worked in a team comprised of over 10 Silicon Valley veterans, and my primary duty was to be in charge of the entire frontend development, UI & UX design and prototyping.`
      ],
      <img
      className={`${styles.recargaPayImage}`}
      src={cannabitImage}
      alt="Cannabit"
      />
      ),
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

  constructor(props) {
    super(props);

    this.state = { currentProjectIndex: 0 };
  }

  onPreviousClick = () => {
    const { currentProjectIndex } = this.state;
    this.setState({
      currentProjectIndex:
        currentProjectIndex <= 0
          ? this.projects.length - 1
          : currentProjectIndex - 1
    });
  };

  onNextClick = () => {
    const { currentProjectIndex } = this.state;
    this.setState({
      currentProjectIndex:
        currentProjectIndex >= this.projects.length - 1
          ? 0
          : currentProjectIndex + 1
    });
  };

  renderDesktopPortfolio = () => {
    const { currentProjectIndex } = this.state;

    const currentProject = this.projects[currentProjectIndex];

    return (
      <div className={styles.columnWrapper}>
        <div className={styles.portfolioLeftColumn}>
          <div className={styles.portfolioHeader}>
            <span className={styles.appName}>{currentProject.name}</span>
            <span className={styles.appRole}>{currentProject.role}</span>
            <div className={styles.appDivider} />
          </div>
          <div className={styles.portfolioBody}>
            <span className={styles.appDescriptionHeader}>
              {currentProject.descriptionHeader}
            </span>
            {currentProject.descriptionBody.map(body => (
              <p className={styles.appDescriptionBody}>{body}</p>
            ))}
          </div>
        </div>
        <div className={styles.portfolioRightColumn}>
          {currentProject.mediaElement}
        </div>
      </div>
    );
  };

  renderMobilePortfolio = () => {
    return (
      <div className={styles.mobilePortfolioWrapper}>
        {this.projects.map(project => (
          <div className={styles.mobileProjectWrapper}>
            <div className={styles.portfolioHeader}>
              <span className={styles.appName}>{project.name}</span>
              <span className={styles.appRole}>{project.role}</span>
              <div className={styles.appDivider} />
            </div>
            <div className={styles.mobileMediaElement}>
              {project.mobileMediaElement}
            </div>
            <div className={styles.portfolioBody}>
              <span className={styles.appDescriptionHeader}>
                {project.descriptionHeader}
              </span>
              {project.descriptionBody.map(body => (
                <p className={styles.appDescriptionBody}>{body}</p>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.mobilePortfolioWhitespace} />
      </div>
    );
  };

  renderPortfolio = () => {
    return (
      <div className={styles.portfolioWrapper}>
        {this.renderDesktopPortfolio()}
        {this.renderMobilePortfolio()}
      </div>
    );
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Menu
          currentTab={MenuOptions.PORTFOLIO}
          onPreviousClick={this.onPreviousClick}
          onNextClick={this.onNextClick}
        />
        {this.renderPortfolio()}
      </div>
    );
  }
}
