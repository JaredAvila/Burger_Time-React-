import React from "react";
import NavItem from "./NavItem/NavItem";

import classes from "./NavItems.css";

const NavItems = props => (
  <ul className={classes.NavItems}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/checkout">Checkout</NavItem>
  </ul>
);

export default NavItems;
