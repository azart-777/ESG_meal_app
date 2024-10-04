import React from 'react'
import './Slogan.scss';
import { Trans } from "react-i18next";

export const Slogan: React.FC = () => {
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

