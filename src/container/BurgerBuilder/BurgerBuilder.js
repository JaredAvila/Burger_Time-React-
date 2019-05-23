import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  produce: 0.4,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      produce: 0
    },
    totalPrice: 4.5
  };

  addIngredient = type => {
    //copy current state into new object
    const upadatedIngredients = {
      ...this.state.ingredients
    };
    //increment ingredient by 1
    upadatedIngredients[type] = this.state.ingredients[type] + 1;
    //calculate new price
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    //update state with new price and count
    this.setState({ totalPrice: newPrice, ingredients: upadatedIngredients });
  };

  removeIngredient = type => {
    //make sure that there are ingredients to remove
    if (this.state.ingredients[type] <= 0) {
      return;
    }
    //copy current state into new array
    const upadatedIngredients = {
      ...this.state.ingredients
    };
    //update ingredient count by 1
    upadatedIngredients[type] = this.state.ingredients[type] - 1;
    //calculate new price
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    //update state with new price and count
    this.setState({ totalPrice: newPrice, ingredients: upadatedIngredients });
  };

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
