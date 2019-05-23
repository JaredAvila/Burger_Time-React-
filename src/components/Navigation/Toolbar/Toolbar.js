import React from "react";
import classes from "./Toobar.css";
import Logo from "../../Logo/Logo";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </header>
);

export default Toolbar;
