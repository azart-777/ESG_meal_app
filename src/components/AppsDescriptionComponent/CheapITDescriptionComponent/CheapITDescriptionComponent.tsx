import React from "react";
import "./CheapITDescriptionComponent.scss";
import { new_cheap_it_logo_with_name } from "../../../assets/images/index";
import { cheap_it_message } from "../../../assets/images/index";
import { useTranslation } from "react-i18next";

export const CheapITDescriptionComponent: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <>
      <div className="cheap-it-description">
        <h2 className="cheap-it-description__section-title">
          «<span>{t("cheapITDescription.we")}</span>{" "}
          {t("cheapITDescription.wantedToCreateSomething")}{" "}
          <span>{t("cheapITDescription.unique1")}!</span>»
        </h2>
        <div className="cheap-it-description__info-block">
          <div className="cheap-it-description__info-block-section">
            <img
              className="cheap-it-description__info-block-section-logo"
              src={new_cheap_it_logo_with_name}
              alt="cheap it logo with name"
            />
            <img
              className="cheap-it-description__info-block-section-message-image"
              src={cheap_it_message}
              alt=""
            />
            <p className="cheap-it-description__info-block-section-caption">
              {t("cheapITDescription.hungry")}??? <br />
              {t("cheapITDescription.saveThePlanet")}!
            </p>
          </div>
          <ul className="cheap-it-description__info-block-list">
            <li>
              {t("cheapITDescription.exploreAWorldOf")}{" "}
              <span>{t("cheapITDescription.deliciousness")}</span>{" "}
            </li>
            <li>
              <span>{t("cheapITDescription.discover")}</span>{" "}
              {t("cheapITDescription.unique2")}{" "}
              <span>{t("cheapITDescription.cuisines")}</span>{" "}
              {t("cheapITDescription.andLocal")}{" "}
              <span>{t("cheapITDescription.favourites")}</span>{" "}
              {t("cheapITDescription.justFromYourPhone")}
            </li>
            <li>
              {t("cheapITDescription.save")}{" "}
              <span>{t("cheapITDescription.time")}</span>{" "}
              {t("cheapITDescription.and")}{" "}
              <span>{t("cheapITDescription.money")}</span>{" "}
              {t("cheapITDescription.forYouNext")}{" "}
              <span>{t("cheapITDescription.adventure")}</span>
            </li>
            <li>
              {t("cheapITDescription.enjoy")}{" "}
              <span>{t("cheapITDescription.highQuality")}</span>{" "}
              {t("cheapITDescription.foodFinds")}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
