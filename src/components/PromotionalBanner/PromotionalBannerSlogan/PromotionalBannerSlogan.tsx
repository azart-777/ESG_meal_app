import React from "react";
import "./PromotionalBannerSlogan.scss";
import { useTranslation } from "react-i18next";

const PromotionalBannerSlogan: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <div className={"promotional-banner-slogan"}>
      <h2>
        {t("slogan.eat")} <span>{t("slogan.well")}</span>, {t("slogan.spend")}{" "}
        <span>{t("slogan.less")}</span>, {t("slogan.andMake")}{" "}
        <span>{t("slogan.yourPlanetSmile")}</span>
      </h2>
    </div>
  );
}

export default PromotionalBannerSlogan;

