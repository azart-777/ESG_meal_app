import React from 'react'
import './NewSloganDesignV2.scss';
import { useTranslation, Trans } from "react-i18next";

export const NewSloganDesignV2: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <div className={"main-slogan"}>
      <h3 className={"main-slogan__text"}>
        <Trans
          i18nKey="mainSlogan.slogan"
        />
      </h3>
    </div>
  )
}

