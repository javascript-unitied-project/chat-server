import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";
import { SUBJECT_CODE_RECORDS } from "../../utils/quiz";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{SUBJECT_CODE_RECORDS[room]}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="http://loaclhost:5000">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
