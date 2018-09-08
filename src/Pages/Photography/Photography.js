import React, { Component, PureComponent } from "react";
import styles from "./styles.css";
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

  render() {
    const { imageStatus, currentPhoto } = this.state;
    return (
      <div className="wrapper">
        <Menu
          currentTab={MenuOptions.PHOTOGRAPHY}
          onPreviousClick={this.onPreviousClick}
          onNextClick={this.onNextClick}
        />
        <div className="photo-wrapper">
          <img
            className="photo"
            alt="Vintage Macintosh"
            src={`photos/${currentPhoto}.jpg`}
            style={{
              opacity:
                imageStatus[currentPhoto - 1] === ImageLoadingStatus.LOADED
                  ? 1
                  : 0
            }}
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
          />
        </div>
      </div>
    );
  }
}
