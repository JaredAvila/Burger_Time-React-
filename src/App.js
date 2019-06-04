import React from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";

import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Checkout from "./container/Checkout/Checkout";
import Orders from "./container/Orders/Orders";
import Auth from "./container/Auth/Auth";
import Logout from "./container/Auth/Logout/Logout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
      </Switch>
    </Layout>
  );
}

export default App;
