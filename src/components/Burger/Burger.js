import React from "react";
import classes from "./burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  //get array of keys to map over
  let ingredientsArray = Object.keys(props.ingredients)
    .map(igKey => {
      //get array of ingredients to map over
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        //return JSX for each ingredient in ingredients object
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      //flatten the array so we can count num of ingredients
      return arr.concat(el);
    }, []);
  //placeholder paragraph if there are no ingredients on burger
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
