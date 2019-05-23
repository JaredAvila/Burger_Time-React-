import React from "react";
import classes from "./burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let ingredientsArray = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      //stuff and things
      return arr.concat(el);
    }, []);
  if (ingredientsArray.length === 0) {
    ingredientsArray = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
