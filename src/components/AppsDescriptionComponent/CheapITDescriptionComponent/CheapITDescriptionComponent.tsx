import React from "react";
import "./CheapITDescriptionComponent.scss";
import { new_cheap_it_logo_with_name } from "../../../assets/images/index";
import { cheap_it_message } from "../../../assets/images/index";
import { useTranslation, Trans } from "react-i18next";

export const CheapITDescriptionComponent: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <>
      <div className="cheap-it-description">
        <h2 className="cheap-it-description__section-title">
          &laquo;
          <Trans
            i18nKey="cheapITDescription.slogan"
            components={{ span: <span /> }}
          />
          &raquo;
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
              <Trans i18nKey="cheapITDescription.message" />
            </p>
          </div>
          <ul className="cheap-it-description__info-block-list">
            <li>
              <Trans
                i18nKey="cheapITDescription.sentence1"
                components={{ span: <span /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="cheapITDescription.sentence2"
                components={{ span: <span /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="cheapITDescription.sentence3"
                components={{ span: <span /> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="cheapITDescription.sentence4"
                components={{ span: <span /> }}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
