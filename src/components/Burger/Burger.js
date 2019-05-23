import React from "react";
import classes from "./burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="produce" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
