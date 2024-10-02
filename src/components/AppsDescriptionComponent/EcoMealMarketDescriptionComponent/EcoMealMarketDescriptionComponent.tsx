import React from "react";
import "./EcoMealMarketDescriptionComponent.scss";
import { eco_meal_market_message } from "../../../assets/images/index";
import { new_eco_meal_market_logo_with_name } from "../../../assets/images/index";
import { useTranslation, Trans } from "react-i18next";

export const EcoMealMarketDescriptionComponent: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <>
      <div className="eco-meal-market-description">
        <h2 className="eco-meal-market-description__section-title">
          &laquo;
          <Trans
            i18nKey="ecoMealMarketDescription.slogan"
            components={{ span: <span /> }}
          />
          &raquo;
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
              <Trans i18nKey="ecoMealMarketDescription.message" />
            </p>
          </div>
          <ul className="eco-meal-market-description__info-block-list">
            <li>
              <Trans
                i18nKey="ecoMealMarketDescription.sentence1"
                components={{ span: <span /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="ecoMealMarketDescription.sentence2"
                components={{ span: <span /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="ecoMealMarketDescription.sentence3"
                components={{ span: <span /> }}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
