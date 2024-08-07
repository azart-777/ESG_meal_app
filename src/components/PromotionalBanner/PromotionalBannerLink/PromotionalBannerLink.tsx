import React from "react";
import "./PromotionalBannerLink.scss";
import {logo_Cheap_IT_in_main_banner} from "../../../assets/images/index";
import {logo_Meal_count_with_title} from "../../../assets/images/index";
import {logo_Meal_market_logo_with_title} from "../../../assets/images/index";

const PromotionalBannerLink: React.FC = () => {
  return (
    <div className="promotional-banner">
      <a className="promotional-banner__link" href="#">
        <img
          className="promotional-banner__link-img--first"
          src={logo_Meal_count_with_title}
          alt="Meal Count Icon"
        />
      </a>
      <a className="promotional-banner__link" href="#">
        <img
          className="promotional-banner__link-img--second"
          src={logo_Cheap_IT_in_main_banner}
          alt="Cheap Meal Icon"
        />
        <p className="promotional-banner__link-text">
          cheap <span>it</span>
        </p>
      </a>
      <a className="promotional-banner__link" href="#">
        <img
          className="promotional-banner__link-img--last"
          src={logo_Meal_market_logo_with_title}
          alt="Eco Meal Icon"
        />
      </a>
    </div>
  );
};

export default PromotionalBannerLink;
