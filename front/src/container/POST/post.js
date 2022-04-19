import React, { Component } from "react";
import axios from "axios";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import "./post.css";

class Post extends Component {
  state = {
    id: null,
    name: null,
    description: null,
    price: null,
    tag: null,
    stock: null,
  };
  handler1 = (event) => {
    this.setState({ name: event.target.value });
  };
  handler2 = (event) => {
    this.setState({ description: event.target.value });
  };
  handler3 = (event) => {
    this.setState({ id: event.target.value });
  };
  handler4 = (event) => {
    this.setState({ price: event.target.value });
  };
  handler5 = (event) => {
    this.setState({ tag: event.target.value });
  };
  handler6 = (event) => {
    this.setState({ stock: event.target.value });
  };

  btnClicked1 = (e) => {
    e.preventDefault();
    const id = this.state.id;
    const name = this.state.name;
    const description = this.state.description;
    const price = this.state.price;
    const tag = this.state.tag;
    const stock = this.state.stock;
    const email = this.props.user;
    console.log(email,"email")
    const data = { id, name, description, price, tag, stock, email };
    axios
      .post("http://localhost:3001/addpost", data)
      .then(setTimeout(() => this.props.onInitData(), 1000));
  };
  btnClicked2 = (e) => {
    e.preventDefault();
    const id = this.state.id;
    const data = { id };
    axios
      .post("http://localhost:3001/deletepost", data)
      .then(setTimeout(() => this.props.onInitData(), 1000));
  };
  render() {
    return (
      <div>
        <div className="post">
          <input
            type="number"
            onChange={this.handler3}
            placeholder="enter id"
          ></input>
          <input
            type="text"
            onChange={this.handler1}
            placeholder="enter modelname"
          ></input>
          <input
            type="text"
            onChange={this.handler2}
            placeholder="enter description"
          ></input>
          <input
            type="text"
            onChange={this.handler4}
            placeholder="enter price"
          ></input>
          <input
            type="text"
            onChange={this.handler5}
            placeholder="enter tag"
          ></input>
          <input
            type="number"
            onChange={this.handler6}
            placeholder="enter stock"
          ></input>
          <button className="submit" onClick={this.btnClicked1}>
            Post
          </button>
          If you want to Delete Enter item id
          <input type="text" onChange={this.handler3} placeholder="enter id" />
          <button className="submit" onClick={this.btnClicked2}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.resp,
    got: state.got,
    user: state.islogged.email,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitData: () => dispatch(actions.importItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
