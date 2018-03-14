import React, { Component } from 'react';
import YouTube from 'react-youtube';
import wednesdayImage from '../assets/wednesday.jpg';
import wednesdayText from '../util/wednesdayText';
import pickVideo from '../util/pickVideo';

export default class wednesday extends Component {
  state = {
    videoId: pickVideo(),
  };

  playNextVideo = () =>
    this.setState(({ videoId }) => ({
      videoId: pickVideo(),
    }));

  render() {
    return navigator.onLine ? (
      <div className="video-background">
        <div className="video-foreground">
          <YouTube
            videoId={this.state.videoId}
            opts={{ playerVars: { autoplay: 1, controls: 0 } }}
            onEnd={this.playNextVideo}
          />
        </div>
      </div>
    ) : (
      <div className="align-center">
        <img src={wednesdayImage} alt={wednesdayText()} />
      </div>
    );
  }
}
