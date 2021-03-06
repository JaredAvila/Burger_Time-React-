import React from "react";
import NavItem from "./NavItem/NavItem";

import classes from "./NavItems.css";

const NavItems = props => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link="/">Burger Builder</NavItem>
      {props.auth ? <NavItem link="/orders">Orders</NavItem> : null}
      {!props.auth ? (
        <NavItem link="/auth">Login</NavItem>
      ) : (
        <NavItem link="/logout">Logout</NavItem>
      )}
    </ul>
  );
};

export default NavItems;
