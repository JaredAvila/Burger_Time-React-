import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/";

import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Checkout from "./container/Checkout/Checkout";
import Orders from "./container/Orders/Orders";
import Auth from "./container/Auth/Auth";
import Logout from "./container/Auth/Logout/Logout";

class App extends Component {
  componentDidMount = () => {
    this.props.tryAutoLogin();
  };

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: state.auth.token !== null };
};

const mapDispatchToProps = dispatch => {
  return {
    tryAutoLogin: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
