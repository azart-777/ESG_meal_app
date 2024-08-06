import React from "react";
import earthImage from "../../assets/images/earth.png";
import greenSmoke from "../../assets/images/green_smoke.png";
import "./EarthImage.scss";

export default function EarthImage() {
  return (
    <div className={"banner"}>
      <img className={"banner__smoke"} src={greenSmoke} alt="" />
      <img className={"banner__earth-img"} src={earthImage} alt="" />
      <div className={"banner__shadow"}></div>
    </div>
  );
}
