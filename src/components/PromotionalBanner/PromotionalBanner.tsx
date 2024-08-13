import React from "react";
import "./PromotionalBanner.scss";
import PromotionalBannerSlogan from "./PromotionalBannerSlogan/PromotionalBannerSlogan";
import PromotionalBannerLinks from "./PromotionalBannerLinks/PromotionalBannerLinks";
import { Earth_image_in_main_banner } from "../../assets/images/index";
import { Green_smoke_in_main_banner } from "../../assets/images/index";

export const PromotionalBanner: React.FC = () => {
  return (
    <div className={"main-promotional-banner mb-xxl"}>
      <PromotionalBannerSlogan />
      <PromotionalBannerLinks />
      <div className={"banner"}>
        <img
          className={"banner__smoke"}
          src={Green_smoke_in_main_banner}
          alt=""
        />
        <img
          className={"banner__earth-img"}
          src={Earth_image_in_main_banner}
          alt=""
        />
        <div className={"banner__shadow"}></div>
      </div>
    </div>
  );
};
