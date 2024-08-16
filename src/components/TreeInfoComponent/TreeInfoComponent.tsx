import React from "react";
import TreeInfoCard from "./TreeInfoCard/TreeInfoCard";
import "./TreeInfoComponent.scss";
import { card1, card2, card3 } from "./treeInfoData";
import treeImage from "../../assets/images/arrows.png";
import giftBox from "../../assets/images/giftBox.png";
import { Container } from "@mui/material";

export function TreeInfoComponent() {
  return (
    <Container className={"mb-3xl"}>
      <div className={"info-tree"}>
        <div className={"info-tree__section"}>
          <div className={"info-tree__section-card"}>
            <TreeInfoCard {...card1} />
          </div>
          <div className={"info-tree__section-card"}>
            <TreeInfoCard {...card2} />
          </div>
          <div className={"info-tree__section-card"}>
            <TreeInfoCard {...card3} />
          </div>
          <div className={"info-tree__section-primary-geometry"}>
            <img src={treeImage} alt="Geometric Tree" />
          </div>
          <div className={"info-tree__section-secondary-geometry"}>
            <img src={treeImage} alt="Geometric Tree" />
          </div>
        </div>
        <div className={"info-tree__primary-light-circle"}></div>
        <div className={"info-tree__secondary-light-circle"}></div>

        <div className={"info-tree__gift-box"}>
          <img src={giftBox} alt="Gift box" />
        </div>
      </div>
    </Container>
  );
}
