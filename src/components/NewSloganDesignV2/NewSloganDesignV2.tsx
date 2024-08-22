import React from 'react'
import './NewSloganDesignV2.scss';
import { useTranslation } from "react-i18next";

export const NewSloganDesignV2:  React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <div className={"new-slogan-design"}>
      <h2>
        <span>{t("newSlogan.eat")}</span> {t("newSlogan.well")}<span>, {t("newSlogan.spend")}</span>{" "}
        {t("newSlogan.less")}<span>,</span> <br /> {t("newSlogan.and")}{" "} <br /> <span>{t("newSlogan.makeYour")}</span> {t("newSlogan.planetSmile")}
      </h2>
    </div>
  )
}

