import React from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Switch,
  Route,
  Redirect,
  Prompt,
} from "react-router-dom";

import EmployeePersonalInfo from "./EmployeePersonalInfo";
import EmployeeSalaryInfo from "./EmployeeSalaryInfo";

function EditEmployee(props) {
  return (
    <div>
      <Link to={"/employee/" + props.match.params.id}>Personal</Link>{" "}
      &nbsp;&nbsp;
      <NavLink
        to={"/employee/" + props.match.params.id + "/salary"}
        activeClassName="testClass"
      >
        Salary
      </NavLink>
      &nbsp;&nbsp;
      <NavLink
        to={"/employee/" + props.match.params.id + "/projects"}
        activeClassName="testClass"
      >
        Projects
      </NavLink>
      <Switch>
        <Route
          exact
          path="/employee/:id"
          component={EmployeePersonalInfo}
        ></Route>
        <Route
          path={props.match.url + "/salary"}
          component={EmployeeSalaryInfo}
        ></Route>
      </Switch>
    </div>
  );
}

export default EditEmployee;
