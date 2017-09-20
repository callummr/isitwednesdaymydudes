import React from "react";
import qs from "qs";

const videoBase = "https://www.youtube.com/embed/";
const videoParams = qs.stringify({
  controls: 0,
  showinfo: 0,
  rel: 0,
  autoplay: 1,
  loop: 0
});

const getVideoUrl = id => `${videoBase}${id}?${videoParams}`;

export default ({ videoId }) => (
  <div className="video-background">
    <div className="video-foreground">
      <iframe
        title="It is Wednesday, my dudes"
        src={getVideoUrl(videoId)}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </div>
);
