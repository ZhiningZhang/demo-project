import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import Employee from "./Employee";
import Department from "./Department";

function RoutingExApp() {
  return (
    <BrowserRouter>
    <div>
      <h4>Welcome to App ...</h4>
      <ul>
        <li>
          <Link to="/employee">Employee</Link>
        </li>
        <li>
          <Link to="/department">Department</Link>
        </li>
      </ul>
      <Route path="/employee" component={Employee}></Route>
      <Route path="/department" component={Department}></Route>
    </div>
    </BrowserRouter>
  );
}

export default RoutingExApp;
