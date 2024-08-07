import React from "react";
import {Earth_image_in_main_banner} from "../../assets/images/index";
import {Green_smoke_in_main_banner} from "../../assets/images/index";
import "./EarthImage.scss";

export const EarthImage:  React.FC = () => {
  return (
    <div className={"banner"}>
      <img className={"banner__smoke"} src={Green_smoke_in_main_banner} alt="" />
      <img className={"banner__earth-img"} src={Earth_image_in_main_banner} alt="" />
      <div className={"banner__shadow"}></div>
    </div>
  );
}
