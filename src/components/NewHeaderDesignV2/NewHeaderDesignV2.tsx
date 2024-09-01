import React from 'react';
import './NewHeaderDesignV2.scss';
import { LanguageSwitch } from "../index";
import { new_logo_arrows, header_light_ellipse } from "../../assets/images";

export const NewHeaderDesignV2: React.FC = () => {
    return (
        <>
            <div className="header mb-md">
                <div className="header__logo-container">
                    <div className="header__logo-ellipse">
                        <img className="header__logo-ellipse-image" src={header_light_ellipse}
                            alt="Moon with green highlight at the bottom" />
                    </div>
                    <div className="header__logo">
                        <h3 className="header__logo-text">Cheap IT</h3>&nbsp;
                        <img className="header__logo-image" src={new_logo_arrows}
                            alt="Chip It Family Logo. Green Basket with the text Chip It Family under it." />&nbsp;
                        <h3 className="header__logo-text">Family</h3>
                    </div>
                </div>
                <div className="header__language-switch-container">
                    <LanguageSwitch />
                </div>
            </div>
        </>
    )
}
