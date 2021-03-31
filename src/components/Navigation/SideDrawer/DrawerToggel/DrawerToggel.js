import React from "react";
import classes from "./DrawerToggel.css";
const DrawerToggel = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggel;