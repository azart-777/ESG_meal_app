import React from "react";
import PromotionalBannerSlogan from "./PromotionalBannerSlogan/PromotionalBannerSlogan";
import PromotionalBannerLink from "./PromotionalBannerLink/PromotionalBannerLink";
import { Container } from "@mui/material";

const PromotionalBanner: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <PromotionalBannerSlogan />
      <PromotionalBannerLink />
    </Container>
  );
};

export default PromotionalBanner;
