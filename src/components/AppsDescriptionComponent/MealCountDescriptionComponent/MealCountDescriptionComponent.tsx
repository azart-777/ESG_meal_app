import React from "react";
import "./MealCountDescriptionComponent.scss";
import { meal_count_message } from "../../../assets/images/index";
import { new_meal_count_logo_with_name } from "../../../assets/images/index";
import { useTranslation } from "react-i18next";

export const MealCountDescriptionComponent: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <>
      <div className="meal-count-description">
        <h2 className="meal-count-description__section-title">
          «{t("mealCountDescription.somethingTruly")}{" "}
          <span>{t("mealCountDescription.important")}!</span>»
        </h2>
        <div className="meal-count-description__info-block">
          <div className="meal-count-description__info-block-section">
            <img
              className="meal-count-description__info-block-section-logo"
              src={new_meal_count_logo_with_name}
              alt="meal count logo with name"
            />
            <img
              className="meal-count-description__info-block-section-message-image"
              src={meal_count_message}
              alt=""
            />
            <p className="meal-count-description__info-block-section-caption">
              {t("mealCountDescription.doYouWantToEatWell")}
              <br />
              {t("mealCountDescription.withoutSpendingExtra")}???
              <br />
              {t("mealCountDescription.saveThePlanet")}!
            </p>
          </div>
          <ul className="meal-count-description__info-block-list">
            <li>
              {t("mealCountDescription.save")}{" "}
              <span>{t("mealCountDescription.time")}</span>{" "}
              {t("mealCountDescription.onCooking")}
            </li>
            <li>
              {t("mealCountDescription.saveYour")}{" "}
              <span>{t("mealCountDescription.money")}</span>
            </li>
            <li>
              {t("mealCountDescription.saveThe")}{" "}
              <span>{t("mealCountDescription.environment")}</span>
            </li>
            <li>
              <span>{t("mealCountDescription.discover")}</span>{" "}
              {t("mealCountDescription.newDishes")}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
