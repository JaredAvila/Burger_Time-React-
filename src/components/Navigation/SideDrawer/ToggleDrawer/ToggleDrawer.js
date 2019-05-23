import React from "react";
import classes from "./DrawerToggle.css";

const ToggleDrawer = props => (
  <div
    className={classes.DrawerToggle}
    onClick={props.clicked}
    style={{ cursor: "pointer" }}
  >
    <div />
    <div />
    <div />
  </div>
);

export default ToggleDrawer;
