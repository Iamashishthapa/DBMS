import React, { Component } from "react";
import Image from "../../container/Images/image";
import "./block.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class block extends Component {
  notLogged = () => {
    this.props.history.push({
      pathname: "/login",
    });
  };
  addtocart=()=>{
      
  }
  render() {
    var cart = null;
    if (!this.props.logged) {
      cart = <button onClick={this.notLogged}>Add To Cart</button>;
    } else {
      cart = <button onClick={this.addtocart}>Add To Cart</button>;
    }
    var show = null;
    if (this.props.got) {
      if (this.props.data.length) {
        show = this.props.data.map((dat) => (
          <div key={dat.id} className="box1">
            <Image name={dat.id} alt="" />
            <p>{dat.item_name}</p>
            <p>{dat.item_description}</p>
            <p>$ {dat.price}</p>
            <p>In Stock:{dat.stock}</p>
            {cart}
          </div>
        ));
      } else if (!this.props.data.length) {
        show = <div className="box1">No Item Found</div>;
      }
    }
    return <div className="block">{show}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    logged: state.islogged.islogged,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitData: () => dispatch(actions.importItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(block));
