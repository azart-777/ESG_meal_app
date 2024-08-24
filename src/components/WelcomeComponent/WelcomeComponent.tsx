import React from "react";
import "./WelcomeComponent.scss";
import { useTranslation } from "react-i18next";
import { hands_with_planet_welcome } from "../../assets/images/index";

export const WelcomeComponent: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <>
      <div className="welcome-container">
        <p className="welcome-container__welcoming-text">
          {t("welcomeText.WelcomeToThe")}{" "}
          <span>{t("welcomeText.CheapItFamily")}</span>
        </p>
        <div className="welcome-container__border"></div>
        <p className="welcome-container__short-slogan">
          {t("welcomeText.todayWeBuildingTomorrow!")}
        </p>
        <div className="welcome-container__hands-with-planet">
          <img
            src={hands_with_planet_welcome}
            alt="Two hands are holding a planet from which a plant is growing"
          />
        </div>
      </div>
    </>
  );
};
