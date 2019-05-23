import React, { Component, Fragment } from "react";
import classes from "./layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHander = () => {
    this.setState({ showSideDrawer: false });
  };

  toggleSideDrawerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar toggleDrawer={this.toggleSideDrawerHandler} />
        <SideDrawer
          closed={this.sideDrawerClosedHander}
          open={this.state.showSideDrawer}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
