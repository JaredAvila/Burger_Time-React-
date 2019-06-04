import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import classes from "./SideDrawer.css";
import BackDrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems auth={props.auth} />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
