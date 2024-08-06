import React from "react";
import './PromotionalBanner.scss'
import PromotionalBannerSlogan from "./PromotionalBannerSlogan/PromotionalBannerSlogan";
import PromotionalBannerLink from "./PromotionalBannerLink/PromotionalBannerLink";
import { Container } from "@mui/material";

const PromotionalBanner: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <div className={"main-promotional-banner"}>
        <PromotionalBannerSlogan />
        <PromotionalBannerLink /> 
      </div>
    </Container>
  );
};

export default PromotionalBanner;
