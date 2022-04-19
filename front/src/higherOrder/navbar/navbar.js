import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class nav extends Component {
  state = {
    search: null,
  };
  handler1 = (event) => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  btnClicked1 = (e) => {
    e.preventDefault();
    const queryPrams = [];
    queryPrams.push(encodeURIComponent(this.state.search));
    this.props.history.push({
      pathname: "/searchitem",
      search: "?" + queryPrams,
    });
  };
  render() {
    var loginlogout = null;
    var addupdate = null;
    if (this.props.account_type === "seller") {
      addupdate = (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/additem">
              Add new Item <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/updateitem">
              Update a item
            </NavLink>
          </li>
        </ul>
      );
    }
    if (!this.props.islogged) {
      loginlogout = (
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/createuser">
                Create New Account<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/login">
                Log In<span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      loginlogout = (
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              Welcome {this.props.currentuser}
              <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Logout
              </a>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            Bakas
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {addupdate}
            {loginlogout}
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                onChange={this.handler1}
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={this.btnClicked1}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    islogged: state.islogged.islogged,
    currentuser: state.islogged.currentuser,
    account_type: state.islogged.account_type,
  };
};

export default connect(mapStateToProps)(withRouter(nav));
