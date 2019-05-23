import React, { Fragment } from "react";
import classes from "./layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => (
  <Fragment>
    <Toolbar />
    <main className={classes.content}>{props.children}</main>
  </Fragment>
);

export default Layout;
