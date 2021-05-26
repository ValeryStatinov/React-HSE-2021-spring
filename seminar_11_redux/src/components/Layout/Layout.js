import React from "react";

import "./Layout.css";

export const Layout = ({ leftSide, rightSide }) => (
  <div className="layout">
    <div className="left-side">{leftSide}</div>
    <div className="right-side">{rightSide}</div>
  </div>
);
