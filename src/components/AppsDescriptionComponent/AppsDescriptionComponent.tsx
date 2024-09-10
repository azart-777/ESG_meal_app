import React from "react";
import "./AppsDescriptionComponent.scss";
import { CheapITDescriptionComponent } from "./CheapITDescriptionComponent/CheapITDescriptionComponent";
import { MealCountDescriptionComponent } from "./MealCountDescriptionComponent/MealCountDescriptionComponent";
import { EcoMealMarketDescriptionComponent } from "./EcoMealMarketDescriptionComponent/EcoMealMarketDescriptionComponent";
import vector663 from "../../assets/images/Vector667.png"; //Тимчасовий імпорт, поки не має правильного зображення
export const AppsDescriptionComponent: React.FC = () => {
  return (
    <>
      <div className="apps-description-component">
        <CheapITDescriptionComponent />
        <MealCountDescriptionComponent />
        <EcoMealMarketDescriptionComponent />
        <img
          className="apps-description-component__vector"
          src={vector663}
          alt=""
        />
      </div>
    </>
  );
};
