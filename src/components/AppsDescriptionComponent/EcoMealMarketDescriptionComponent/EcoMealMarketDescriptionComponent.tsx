import React from "react";
import "./EcoMealMarketDescriptionComponent.scss";
import { eco_meal_market_message } from "../../../assets/images/index";
import { new_eco_meal_market_logo_with_name } from "../../../assets/images/index";
import { useTranslation } from "react-i18next";

export const EcoMealMarketDescriptionComponent: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <>
      <div className="eco-meal-market-description">
        <h2 className="eco-meal-market-description__section-title">
          «<span>{t("ecoMealMarketDescription.something")}</span>,{" "}
          {t("ecoMealMarketDescription.thatWillTruly")}{" "}
          <span>{t("ecoMealMarketDescription.changeTheWorld")}!</span>»
        </h2>
        <div className="eco-meal-market-description__info-block">
          <div className="eco-meal-market-description__info-block-section">
            <img
              className="eco-meal-market-description__info-block-section-logo"
              src={new_eco_meal_market_logo_with_name}
              alt=" eco meal market logo with name"
            />
            <img
              className="eco-meal-market-description__info-block-section-message-image"
              src={eco_meal_market_message}
              alt=""
            />
            <p className="eco-meal-market-description__info-block-section-caption">
              {t("ecoMealMarketDescription.doYouHaveABusiness")}? <br />
              {t("ecoMealMarketDescription.doYouProduceFood")}??? <br />
              {t("ecoMealMarketDescription.saveThePlanet")}!
            </p>
          </div>
          <ul className="eco-meal-market-description__info-block-list">
            <li>
              {t("ecoMealMarketDescription.cutThe")}{" "}
              <span>{t("ecoMealMarketDescription.losses")}</span>{" "}
              {t("ecoMealMarketDescription.by")} <span>~10%</span>
            </li>
            <li>
              <span>{t("ecoMealMarketDescription.reduction")}</span>{" "}
              {t("ecoMealMarketDescription.ofFoodWasteInProduction")}
            </li>
            <li>
              <span>{t("ecoMealMarketDescription.noMoney")}</span>{" "}
              {t("ecoMealMarketDescription.is")}{" "}
              <span>{t("ecoMealMarketDescription.thrown")}</span>{" "}
              {t("ecoMealMarketDescription.intoTheTrash")}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
