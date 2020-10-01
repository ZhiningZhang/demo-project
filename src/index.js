import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DisplayEmployeeInfo from "./components/DisplayEmployeeInfo";
import CountCharacters from "./components/CountCharacters";
import CountCharactersClass from "./components/CountCharactersClass";
import Employee from "./components/Employee";
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Employee  Id="101" Name="Pragim" Location="Bangalore" Salary="50000" BasicSalary="25000" HRA="10000" SpecialAllowance="15000" />

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
