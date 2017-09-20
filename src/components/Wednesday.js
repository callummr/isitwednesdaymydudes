import React from "react";
import wednesdayImage from "../assets/wednesday.jpg";
import wednesdayText from "../util/wednesdayText";
import wednesdayVideos from "../videos/wednesday";
import pickRandom from "../util/pickRandom";
import VideoEmbed from "./VideoEmbed";

export default () =>
  navigator.onLine ? (
    <VideoEmbed videoId={pickRandom(wednesdayVideos)} />
  ) : (
    <div className="align-center">
      <img src={wednesdayImage} alt={wednesdayText()} />
    </div>
  );
