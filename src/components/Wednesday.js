import React from 'react';
import wednesdayImage from '../assets/wednesday.jpg';
import wednesdayText from '../util/wednesdayText';
import pickVideo from '../util/pickVideo';
import VideoEmbed from './VideoEmbed';

export default () =>
  navigator.onLine ? (
    <VideoEmbed videoId={pickVideo()} />
  ) : (
    <div className="align-center">
      <img src={wednesdayImage} alt={wednesdayText()} />
    </div>
  );
