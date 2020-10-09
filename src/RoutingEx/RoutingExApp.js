import React from "react";
import { BrowserRouter, Link, NavLink, Switch, Route } from "react-router-dom";

//https://www.youtube.com/watch?v=jVtxC6CKzYU&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=38

import Employee from "./Employee";
import EditEmployee from "./EditEmployee";
import Department from "./Department";
import InvalidPath from "./InvalidPath";

import "./test.css";

function RoutingExApp() {
  return (
    <BrowserRouter>
      <div>
        <h4>Welcome to App ...</h4>
        <ul>
          <li>
            <Link to="/">Employee</Link>
          </li>
          <li>
            <NavLink to="/department" activeClassName="testClass">
              Department
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Employee}></Route>
          <Route path="/employee/:id" component={EditEmployee}></Route>
          <Route path="/department" component={Department}></Route>
          <Route component={InvalidPath}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default RoutingExApp;
