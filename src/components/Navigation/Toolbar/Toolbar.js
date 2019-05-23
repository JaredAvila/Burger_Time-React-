import React from "react";
import classes from "./Toobar.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavItems />
    </nav>
  </header>
);

export default Toolbar;
