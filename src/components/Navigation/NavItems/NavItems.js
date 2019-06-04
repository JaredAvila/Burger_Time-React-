import React from "react";
import NavItem from "./NavItem/NavItem";

import classes from "./NavItems.css";

const NavItems = props => (
  <ul className={classes.NavItems}>
    <NavItem link="/">Burger Builder</NavItem>
    <NavItem link="/orders">Orders</NavItem>
    <NavItem link="/auth">Authenticate</NavItem>
  </ul>
);

export default NavItems;
