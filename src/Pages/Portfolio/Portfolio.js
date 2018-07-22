import React, { Component, PureComponent } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import YouTube from 'react-youtube';
import styles from './styles.css';

export class Portfolio extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      player: null,
      muteButtonText: "Unmute",
      mac: "mutedmac"
    };

    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
  }

  onPlayVideo() {
    this.state.player.playVideo();
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
  }

  onReady(event) {
    event.target.mute();
    event.target.setLoop(true);
    event.target.setShuffle(true);
    event.target.nextVideo();
    this.setState({
      player: event.target,
    });
  }

  onNextVideo = () => {
    this.state.player.nextVideo();
  }

  onMuteVideo = () => {
    this.setState({
      muteButtonText: this.state.player.isMuted() ? 'Mute' : 'Unmute',
      mac: this.state.player.isMuted() ? 'mac' : 'mutedmac'
    })

    if (this.state.player.isMuted()) {
      this.state.player.unMute();
    } else {
      this.state.player.mute();
    }
  }

  render() {
    const opts = {
      height: '360',
      width: '640',
      modestbranding: 1,
      playerVars: {
        controls: 0,
        autoplay: 1,
        disablekb: 1,
        modestbranding: 1,
        showinfo: 1,
        cc_load_policy: 0,
        list: 'PL80DKoeLzUZlm8TtJpxbbBMktKO3NmGfs',
        listType: 'playlist',
        rel: 0,
        playsinline: 1,
        loop: 1
      }
    };

    return (
      <div className="wrapper">
        <div className="links">
          <Link to="/">Home</Link>
          <a href="https://www.github.com/jonybur" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/jonybur" target="_blank">LinkedIn</a>
          <a href="mailto:jobur93@gmail.com" target="_blank">Contact</a>
        </div>
        <div className="content">
          <div className="bais">
            
          </div>
        </div>
      </div>
    );
  }
}
