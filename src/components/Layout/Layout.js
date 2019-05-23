import React, { Fragment } from "react";
import classes from "./layout.css";

const Layout = props => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.content}>{props.children}</main>
  </Fragment>
);

export default Layout;
