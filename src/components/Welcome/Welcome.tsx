import React from "react";
import "./Welcome.scss";
import { useTranslation, Trans } from "react-i18next";
import { hands_with_planet_welcome_component } from "../../assets/images/index";

export const Welcome: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <>
      <div className="welcome-container">
        <h2 className="welcome-container__text">
          <Trans i18nKey="welcomeText.text"/>
        </h2>
        <div className="welcome-container__hands-with-planet">
          <img
            src={hands_with_planet_welcome_component}
            alt="Two hands are holding a planet from which a plant is growing"
          />
        </div>
      </div>
    </>
  );
};
