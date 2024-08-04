import React from "react";
import "./PromotionalBannerLink.scss";
import cheapMealIcon from "../../../assets/images/cheapItIcon.png";
import mealCountIcon from "../../../assets/images/MealCountLogoName.png";
import ecoMealIcon from "../../../assets/images/ecoMealIconRotate.png";

const PromotionalBannerLink: React.FC = () => {
  return (
    <div className="promotional-banner">
      <a className="promotional-banner__link" href="#">
        <img
          className="promotional-banner__link-img--first"
          src={mealCountIcon}
          alt="Meal Count Icon"
        />
      </a>
      <a className="promotional-banner__link" href="#">
        <img
          className="promotional-banner__link-img--second"
          src={cheapMealIcon}
          alt="Cheap Meal Icon"
        />
        <p className="promotional-banner__link-text">
          cheap <span>it</span>
        </p>
      </a>
      <a className="promotional-banner__link" href="#">
        <img
          className="promotional-banner__link-img--last"
          src={ecoMealIcon}
          alt="Eco Meal Icon"
        />
      </a>
    </div>
  );
};

export default PromotionalBannerLink;
