import React from "react";
import classes from "./Toobar.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import ToggleDrawer from "../SideDrawer/ToggleDrawer/ToggleDrawer";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <ToggleDrawer clicked={props.toggleDrawer} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavItems auth={props.auth} />
    </nav>
  </header>
);

export default Toolbar;
