import React from "react";
import "./MealCountDescriptionComponent.scss";
import { meal_count_message } from "../../../assets/images/index";
import { new_meal_count_logo_with_name } from "../../../assets/images/index";
import { useTranslation, Trans } from "react-i18next";

export const MealCountDescriptionComponent: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <>
      <div className="meal-count-description">
        <h2 className="meal-count-description__section-title">
          &laquo;
          <Trans
            i18nKey="mealCountDescription.slogan"
            components={{ span: <span /> }}
          />
          &raquo;
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
              <Trans i18nKey="mealCountDescription.message" />
            </p>
          </div>
          <ul className="meal-count-description__info-block-list">
            <li>
              <Trans
                i18nKey="mealCountDescription.sentence1"
                components={{ span: <span /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="mealCountDescription.sentence2"
                components={{ span: <span /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="mealCountDescription.sentence3"
                components={{ span: <span /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="mealCountDescription.sentence4"
                components={{ span: <span /> }}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
