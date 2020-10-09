import React from "react";
import {BrowserRouter, Link, NavLink, Switch, Route } from "react-router-dom";

import SecuredRoute from "./SecuredRoute";
import LogIn from "./LogIn";
import Home from "./Home";
import EditProfile from "./EditProfile";

//https://www.youtube.com/watch?v=wAo12kSeVzI&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=42

function Routing2Ex() {
  return (
    <BrowserRouter>
      <div>
        <h2>Welcome to App Component...</h2>
        <Link to="/">LogIn</Link>&nbsp;&nbsp;
        <NavLink to="/home" activeClassName="testClass">
          Home
        </NavLink>
        &nbsp;&nbsp;
        <NavLink to="/editprofile" activeClassName="testClass">
          Edit Profile
        </NavLink>
        <Switch>
          <Route exact path="/" component={LogIn}></Route>
          <SecuredRoute path="/home" component={Home}></SecuredRoute>
          <SecuredRoute
            path="/editprofile"
            component={EditProfile}
          ></SecuredRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routing2Ex;
