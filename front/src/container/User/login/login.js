import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import "./login.css";

class login extends Component {
  state = {
    email: '',
    password: '',
    what: true,
  };
  checkbutton = () => {
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({ what: false });
    }
  };
  handler1 = (event) => {
    this.setState({ email: event.target.value });
    this.checkbutton();
  };
  handler2 = (event) => {
    this.setState({ password: event.target.value });
    this.checkbutton();
  };

  btnClicked1 = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const data = { email, password };
    this.props.onloginlogout(data);
    this.props.history.push({
      pathname: "/",
    });
  };
  render() {
    return (
      <div>
        <div className="post">
          <input
            type="text"
            onChange={this.handler1}
            placeholder="enter email"
          ></input>
          <input
            type="text"
            onChange={this.handler2}
            placeholder="enter password"
          ></input>
          <button
            disabled={this.state.what}
            className="login"
            onClick={this.btnClicked1}
          >
            Log In
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onloginlogout: (data) => dispatch(actions.login(data)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(login));
