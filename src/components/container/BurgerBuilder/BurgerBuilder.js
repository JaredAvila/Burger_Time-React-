import React, { Component, Fragment } from "react";
import Burger from "../../Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 2,
      produce: 1
    }
  };
  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
