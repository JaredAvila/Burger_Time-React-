import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import classes from "./layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

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
        <Toolbar
          auth={this.props.isAuthenticated}
          toggleDrawer={this.toggleSideDrawerHandler}
        />
        <SideDrawer
          auth={this.props.isAuthenticated}
          closed={this.sideDrawerClosedHander}
          open={this.state.showSideDrawer}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
