import React from "react";
import { useTranslation, Trans } from "react-i18next";
import "./DescriptionCard.scss";

interface DescriptionCardProps {
  slogan: string;
  message: string;
  sentences: string[];
  shortDescription: string;
  logo: string;
  styleVariant?: number;
}
export const DescriptionCard: React.FC<DescriptionCardProps> = ({
  slogan,
  message,
  sentences,
  shortDescription,
  logo,
  styleVariant,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`description-card description-card-${styleVariant}`}>
      <div
        className={`description-card__slogan description-card-${styleVariant}__slogan`}
      >
        <div
          className={`description-card__slogan-border description-card-${styleVariant}__slogan-border`}
        >
          <h2
            className={`description-card__slogan-border-text description-card-${styleVariant}__slogan-border-text`}
          >
            <Trans i18nKey={slogan} />
          </h2>
        </div>
      </div>
      <div
        className={`description-card__content description-card-${styleVariant}__content`}
      >
        <div
          className={`description-card__content-logo description-card-${styleVariant}__content-logo`}
        >
          <img src={logo} alt={`logo`} />
        </div>
        <div
          className={`description-card__content-details description-card-${styleVariant}__content-details`}
        >
          <h5
            className={`description-card__content-details-message description-card-${styleVariant}-content-details-message`}
          >
            <Trans i18nKey={message} />
          </h5>
          <ul
            className={`description-card__content-details-list description-card-${styleVariant}-content-details-list`}
          >
            {sentences.map((sentence, index) => (
              <li
                key={index}
                className="description-card__content-details-list-item"
              >
                <Trans i18nKey={sentence} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h4
        className={`description-card__short-description description-card-${styleVariant}-short-secription`}
      >
        <Trans i18nKey={shortDescription} />
      </h4>
    </div>
  );
};
