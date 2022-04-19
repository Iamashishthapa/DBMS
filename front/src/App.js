import React from 'react';
import './App.css';
import Get from './container/GET/get';
import Post from './container/POST/post';
import Update from './container/Update/Update';
import {Route,Switch} from 'react-router-dom';
import Nav from './higherOrder/navbar/navbar';
import Search from './container/Search/search';
import CreateUser from './container/User/createUser/createUser';
import Login from './container/User/login/login';
// import Modal from './higherOrder/modal/modal';

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
      <Route path="/additem" component={Post}/>
      <Route path="/updateitem" component={Update}/>
      <Route path="/searchitem" component={Search}/>
      <Route path="/createuser" component={CreateUser}/>
      <Route path="/login" component={Login}/>
      <Route path="/" exact component={Get}/>
      </Switch>
      {/* <Modal/> */}
    </div>
  );
}

export default App;
