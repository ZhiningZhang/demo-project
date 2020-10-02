import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DisplayEmployeeInfo from "./components/DisplayEmployeeInfo";
import CountCharacters from "./components/CountCharacters";
import CountCharactersClass from "./components/CountCharactersClass";
import APPContextEx from "./ContextEx/APPContextEx";
import Employee from "./components/Employee";
import FormExApp from "./FormEx/FormExApp";
import EmployeeComponemt from "./FormikEx/EmployeeComponemt";
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <EmployeeComponemt />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
