import React from "react";
import "./EcoAppNetworkV2.scss";
import { earth_images } from "../../assets/images/";
import { EcoAppNetworkItems } from "./EcoAppNetworkItems/EcoAppNetworkItems";
import { useTranslation } from "react-i18next";

export const EcoAppNetworkV2: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <div className="eco-app-network">
      <EcoAppNetworkItems />
      <div className="eco-app-network__earth">
        <img
          className="eco-app-network__earth-image"
          src={earth_images.home_earth_for_animation}
          alt={t("EcoAppNetworkComponent.altEarthImg")}
        />
      </div>
    </div>
  );
};
