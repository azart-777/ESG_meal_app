import React from "react";
import { cheap_it_family_logo } from "../../../assets/images";

export const MainCompanyLogo: React.FC = () => {
  return (
    <>
      <img
        className="logo__image"
        src={cheap_it_family_logo}
        alt="Chip It Family Logo. Green Basket with the text Chip It Family under it."
      />
      <h3 className="logo__text">
        Cheap <span>IT Fa</span>mily
      </h3>
    </>
  );
};
