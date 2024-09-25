import React from "react";
import "./NewOverviewComponentV2.scss";
import { image_with_phones_overview_component } from "../../assets/images/index";

export const NewOverviewComponentV2: React.FC = () => {
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
