import React from "react";
import TreeInfoCard from "./TreeInfoCard/TreeInfoCard";
import "./treeInfoComponent.scss";
import { data1, data2, data3 } from "./treeInfoData";
import treeImage from "../../assets/images/arrows.png";
import giftBox from "../../assets/images/giftBox.png";
import { Container } from "@mui/material";

export default function TreeInfoComponent() {
  return (
    <Container>
      <div className={"info-tree"}>
        <div className={"info-tree__section"}>
          <div className={"info-tree__section-card"}>
            <TreeInfoCard {...data1} />
          </div>
          <div className={"info-tree__section-card"}>
            <TreeInfoCard {...data2} />
          </div>
          <div className={"info-tree__section-card"}>
            <TreeInfoCard {...data3} />
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
