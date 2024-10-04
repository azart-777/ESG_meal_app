import React from "react";
import "./Overview.scss";
import { image_with_phones_overview_component } from "../../assets/images/index";

export const Overview: React.FC = () => {
  return (
    <>
      <div className="overview-component">
        <img
          src={image_with_phones_overview_component}
          alt="three phones with the logos of the CheapIT Family company"
        />
      </div>
    </>
  );
};
