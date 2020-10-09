import React from "react";
import Employee from "./Employee";
import { createStore } from "redux";
import { Provider } from "react-redux";

const employeeData = {
  salary: 15000,
};

//reducer:
//input: state and action
//output: new state
const reducer = (state = employeeData, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { salary: state.salary + 1000 };

    case "DECREMENT":
      return { salary: state.salary - 1000 };

    default:
      return state;
  }
};
const store = createStore(reducer);

const ReduxExApp = () => (
  <Provider store={store}>
    <Employee></Employee>
  </Provider>
);

export default ReduxExApp;
