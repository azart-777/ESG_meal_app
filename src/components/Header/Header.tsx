import React from 'react';
import './Header.scss';
import { LanguageSwitch } from "../index";
import { chip_it_family_logo, green_planet } from "../../assets/images";

export const Header:  React.FC = () => {
    return (
        <>
            <div className="header">
                <div className="header__logo-container">
                    <div className="header__logo-planet">
                        <img className="header__logo-planet-image" src={green_planet}
                             alt="Moon with green highlight at the bottom"/>
                    </div>
                    <div className="header__logo">
                        <img className="header__logo-image" src={chip_it_family_logo}
                             alt="Chip It Family Logo. Green Basket with the text Chip It Family under it."/>
                    </div>
                </div>
                <div className="header__language-switch-container">
                    <LanguageSwitch/>
                </div>
            </div>
        </>
    );
};
