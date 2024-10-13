import React from "react";
import "./EcoAppNetworkV2.scss";
import { eco_app_network_earth_img } from "../../assets/images/";
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
          src={eco_app_network_earth_img}
          alt={t("EcoAppNetworkComponent.altEarthImg")}
        />
      </div>
    </div>
  );
};
