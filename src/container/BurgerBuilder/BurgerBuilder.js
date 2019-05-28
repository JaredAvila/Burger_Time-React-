import React, { Component, Fragment } from "react";
import axios from "../../axios-orders";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  produce: 0.4,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4.5,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get("https://burger-time-afed8.firebaseio.com/ingredients.json")
      .then(res => {
        this.setState({ ingredients: res.data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCanceledHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinuedHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };

  updatePurchaseState = ingredients => {
    //get array of ingredient names
    const sum = Object.keys(ingredients)
      .map(igKey => {
        //get array of individual ingredient counts
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        //reduce ingredient count array to single sum
        return sum + el;
      }, 0);
    //set purchasable to true or false based on evaluation of expression
    this.setState({ purchasable: sum > 0 });
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
    //update UI
    this.updatePurchaseState(upadatedIngredients);
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
    //update UI
    this.updatePurchaseState(upadatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? (
      <p>The ingredients could not be loaded...</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredient}
            ingredientRemoved={this.removeIngredient}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCanceled={this.purchaseCanceledHandler}
          purchaseContinued={this.purchaseContinuedHandler}
          price={this.state.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCanceledHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
