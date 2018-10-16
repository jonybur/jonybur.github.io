import React, { PureComponent } from "react";
import styles from "./styles.module.css";

export class MozartLoader extends PureComponent {
  render() {
    return (
      <div className={styles.preloaderWrapper}>
        <div className={styles.preloader}>
          <div className={styles.backgroundHighlight} />
          <div className={styles.logoMuleWrapper}>
            <div className={styles.circleLogoMule}>
              <div className={styles.colorMule} />
              <div className={styles.logoFill} />
            </div>
            <div className={styles.logoMule} />
          </div>
        </div>
      </div>
    );
  }
}
