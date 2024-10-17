import React from "react";
import "./EcoAppNetworkV2.scss";
import { eco_app_network_earth_img } from "../../assets/images/";
import { EcoAppNetworkItems } from "./EcoAppNetworkItems/EcoAppNetworkItems";
import { useTranslation } from "react-i18next";
import { ShortTextDescription } from "../../shared/components/shortDescription/ShortTextDescription";
import { MainCompanyLogo } from "../../shared/components/mainCompanyLogo/MainCompanyLogo";

export const EcoAppNetworkV2: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <div className="eco-app-network">
      <div className="eco-app-network__contain">
        <EcoAppNetworkItems />
        <div className="eco-app-network__contain-earth">
          <img
            className="eco-app-network__contain-earth-image"
            src={eco_app_network_earth_img}
            alt={t("EcoAppNetworkComponent.altEarthImg")}
          />
          <div className="eco-app-network__contain-earth-logo">
            <MainCompanyLogo />
          </div>
        </div>
        <div className="eco-app-network__contain-short-description">
          <ShortTextDescription text="EcoAppNetworkComponent.shortText" />
        </div>
      </div>
      <div className="eco-app-network__light-ellipse-left"></div>
      <div className="eco-app-network__light-ellipse-right"></div>
    </div>
  );
};
