import React from "react";
import { DescriptionCard } from "./DescriptionCard/DescriptionCard";
import { contentData } from "./DataDescription/DataDescription";

export const CompanyCards: React.FC = () => {
  return (
    <>
      {contentData.map((item) => (
        <DescriptionCard
          slogan={item.slogan}
          message={item.message}
          sentences={item.sentences}
          shortDescription={item.shortDescription}
          logo={item.logo}
          styleVariant={item.styleVariant}
        />
      ))}
    </>
  );
};
