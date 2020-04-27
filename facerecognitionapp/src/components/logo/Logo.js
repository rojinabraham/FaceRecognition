import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import FaceLogo from "./FaceLogo11.png";

const Logo = () => {
  return (
    <div className="ma4 mt0 center">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 60 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img style={{ paddingTop: "" }} src={FaceLogo}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
