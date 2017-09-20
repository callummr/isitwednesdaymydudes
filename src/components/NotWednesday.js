import React from "react";
import notWednesdayImage from "../assets/notwednesday.jpg";
import wednesdayText from "../util/wednesdayText";

export default () => (
  <div className="align-center">
    <img src={notWednesdayImage} alt={wednesdayText()} />
  </div>
);
