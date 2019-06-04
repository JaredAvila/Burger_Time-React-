import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "../Checkout/ContactData/ContactData";
// import * as actions from "../../store/actions/";

class Checkout extends Component {
  checkoutCanceledHander = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHander = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <Fragment>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCanceled={this.checkoutCanceledHander}
            checkoutContinued={this.checkoutContinuedHander}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </Fragment>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
