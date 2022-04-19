import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import "./createUser.css";

class createuser extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    address: '',
    phone: '',
    logged: false,
    account_type: "buyer",
    what: true,
  };
  checkbutton = () => {
    if (
      this.state.email !=='' &&
      this.state.name !== '' &&
      this.state.password !== '' &&
      this.state.address !== '' &&
      this.state.phone !== ''
    ) {
      this.setState({ what: false });
    }
  };
  handler1 = (event) => {
    this.setState({ email: event.target.value });
    this.checkbutton();
  };
  handler2 = (event) => {
    this.setState({ name: event.target.value });
    this.checkbutton();
  };
  handler3 = (event) => {
    this.setState({ password: event.target.value });
    this.checkbutton();
  };
  handler4 = (event) => {
    this.setState({ address: event.target.value });
    this.checkbutton();
  };
  handler5 = (event) => {
    this.setState({ phone: event.target.value });
    this.checkbutton();
  };
  handler6 = (event) => {
    this.setState({ account_type: event.target.value });
    this.checkbutton();
  };

  btnClicked1 = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const name = this.state.name;
    const password = this.state.password;
    const address = this.state.address;
    const phone = this.state.phone;
    const account_type=this.state.account_type;
    const data = { email, name, password, address, phone,account_type };
    this.props.onloginlogout(data);
    this.props.history.push({
      pathname: "/login",
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
            placeholder="enter name"
          ></input>
          <input
            type="text"
            onChange={this.handler3}
            placeholder="enter password"
          ></input>
          <input
            type="text"
            onChange={this.handler4}
            placeholder="enter location"
          ></input>
          <input
            type="number"
            onChange={this.handler5}
            placeholder="enter phone number"
          ></input>
          <select value={this.state.account_type} onChange={this.handler6}>
            <option value="buyer">buyer</option>
            <option value="seller">seller</option>
          </select>
          <button
            className="submit"
            disabled={this.state.what}
            onClick={this.btnClicked1}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onloginlogout: (data) => dispatch(actions.createuser(data)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(createuser));
