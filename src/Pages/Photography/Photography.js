import React, { PureComponent } from "react";
import styles from "./styles.module.css";
import { Menu, MenuOptions } from "../Components/Menu";

export const ImageLoadingStatus = {
  LOADING: "loading",
  LOADED: "loaded",
  FAILED_TO_LOAD: "failedtoload"
};

const PHOTO_COUNT = 33;

export class Photography extends PureComponent {
  constructor(props) {
    super(props);
    let imageStatus = [];
    for (let i = 0; i < PHOTO_COUNT; i++) {
      imageStatus.push(ImageLoadingStatus.LOADING);
    }
    this.state = { imageStatus: imageStatus, currentPhoto: 1 };
  }

  handleImageLoaded() {
    const { currentPhoto, imageStatus } = this.state;
    imageStatus[currentPhoto - 1] = ImageLoadingStatus.LOADED;
    this.setState({ imageStatus: imageStatus });
    this.forceUpdate();
  }

  handleImageErrored() {
    this.setState({ imageStatus: ImageLoadingStatus.FAILED_TO_LOAD });
  }

  onPreviousClick = () => {
    const { currentPhoto } = this.state;
    this.setState({
      currentPhoto: currentPhoto <= 1 ? PHOTO_COUNT : currentPhoto - 1
    });
  };

  onNextClick = () => {
    const { currentPhoto } = this.state;
    this.setState({
      currentPhoto: currentPhoto >= PHOTO_COUNT ? 1 : currentPhoto + 1
    });
  };

  getMobilePhotoList = () => {
    const { imageStatus } = this.state;
    return imageStatus.map((_, index) => (
      <div className={styles.mobilePhotoWrappeer}>
        <img
          key={"mobile-img-" + index}
          className={styles.mobilePhoto}
          alt="Analog photograph"
          src={`photos/${index + 1}.jpg`}
        />
      </div>
    ));
  };

  render() {
    const { imageStatus, currentPhoto } = this.state;
    return (
      <div className={styles.wrapper}>
        <Menu
          currentTab={MenuOptions.PHOTOGRAPHY}
          onPreviousClick={this.onPreviousClick}
          onNextClick={this.onNextClick}
        />
        <div className={styles.photoWrapper}>
          <img
            className={styles.photo}
            src={`photos/${currentPhoto}.jpg`}
            style={{
              opacity:
                imageStatus[currentPhoto - 1] === ImageLoadingStatus.LOADED
                  ? 1
                  : 0
            }}
            alt="Analog photograph"
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
          />
          <div className={styles.mobilephotoWrapper}>
            {this.getMobilePhotoList()}
            <div className={styles.mobilePhotoWhitespace} />
          </div>
        </div>
      </div>
    );
  }
}
