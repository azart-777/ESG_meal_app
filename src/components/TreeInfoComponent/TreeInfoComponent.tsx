import React from "react";
import TreeInfoCard from "./TreeInfoCard/TreeInfoCard";
import "./treeInfoComponent.scss";
import { data1, data2, data3 } from "./treeInfoData";
import treeImage from "../../assets/images/arrows.png";
import giftBox from "../../assets/images/giftBox.png";

export default function TreeInfoComponent() {
  return (
    <div className="main_container">
      <div className="treeInfoCard_container">
        <div className="treeInfoCard">
          <TreeInfoCard {...data1} />
        </div>
        <div className="treeInfoCard">
          <TreeInfoCard {...data2} />
        </div>
        <div className="treeInfoCard">
          <TreeInfoCard {...data3} />
        </div>
        <div className="tree">
          <img src={treeImage} alt="Geometric Tree" />
        </div>
        <div className="secondTree">
          <img src={treeImage} alt="Geometric Tree" />
        </div>
      </div>
      <div className="lightCircle"></div>
      <div className="secondLightCircle"></div>

      <div className="giftBoxIcon">
        <img src={giftBox} alt="" />
      </div>
    </div>
  );
}
