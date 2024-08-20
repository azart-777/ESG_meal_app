import React from "react";
import "./CircleWithTalkingHead.scss";
import { Jake_talking_head } from "../../assets/images";
import { frame_for_talking_head } from "../../assets/images";

export const CircleWithTalkingHead: React.FC = () => {
  return (
    <div className={"circle-with-talking-head"}>
      <img
        className={"circle-with-talking-head__head-img"}
        src={Jake_talking_head}
        alt="talking head"
      />
      <img
        className={"circle-with-talking-head__frame-img"}
        src={frame_for_talking_head}
        alt="frame for talking head"
      />
    </div>
  );
};
