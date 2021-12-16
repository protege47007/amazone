import React from "react";
import { logo } from "../body/resource";

function Brand() {
  return (
    <div className="brand">
      <div className="desktop">
        <img src={logo} alt="amazone-logo" />
      </div>

      <div className="mobile">
        <h1>Amazone</h1>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default Brand;
