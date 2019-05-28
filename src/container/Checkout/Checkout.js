import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "../Checkout/ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {},
    totalPrice: 0
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const newIngredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        newIngredients[param[0]] = parseInt(param[1]);
      }
    }
    this.setState({ ingredients: newIngredients, totalPrice: price });
  }

  checkoutCanceledHander = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHander = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCanceled={this.checkoutCanceledHander}
          checkoutContinued={this.checkoutContinuedHander}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
export default Checkout;
