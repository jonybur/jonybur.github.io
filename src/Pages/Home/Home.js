import React, { Component, PureComponent } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import YouTube from 'react-youtube';
import styles from './styles.css';

export class Home extends PureComponent {

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
        <div className="content">
          <div className="header">
            <h1>Hey there,</h1>
            <p>My name is Jonathan Bursztyn,</p>
            <p>I'm a Software Engineer at <a href="https://www.mulesoft.com" target="_blank">MuleSoft</a>.</p>
            {/*<p>During my free time I enjoy <Link to="/photography">photography</Link>.</p>*/}
          </div>
          <div className="links">
            {/*<Link to="/portfolio">Portfolio</Link>*/}
            <a href="https://www.github.com/jonybur" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/jonybur" target="_blank">LinkedIn</a>
            <a href="mailto:jobur93@gmail.com" target="_blank">Contact</a>
          </div>
          <div className="macWrapper">
            <img className="mac" src={this.state.mac+".png"} alt="Vintage Macintosh"/>
            <YouTube
              videoId='nxxSIX3fmmo'
              onReady={this.onReady}
              opts={opts}
              className="video"
            />
            <div className="muteButton" title={this.state.muteButtonText} onClick={this.onMuteVideo}/>
            <div className="nextButton" title="Next" onClick={this.onNextVideo}/>
          </div>
        </div>
      </div>
    );
  }
}
