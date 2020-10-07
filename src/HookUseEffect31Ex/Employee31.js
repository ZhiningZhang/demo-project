import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Departments31 from "./Departments31";

function Employee31() {
  const [employeeCount, setEmployeeCount] = useState(0);

  const [noOfDays, setNoOfDays] = useState(0);
  useEffect(() => {
    var handle = setInterval(getEmployeesCount, 5000);

    return () => {
      clearInterval(handle);
    };
  });

    useEffect(()=>{
    console.log('--- useEffect 111');
    setNoOfDays(3);


/*     fetch("https://localhost:44362/api/Test")
    .then(res => res.json())
    .then(
      (result) => {          
        setNoOfDays(result);
      }
    ); */
  })
 
  function getEmployeesCount() {
    console.log("Getting the Employees Count");
    fetch("https://localhost:44362/api/Employee")
      .then((res) => res.json())
      .then((result) => {
        setEmployeeCount(result.length);
      });
  }

  function navigateToDepartment() {
    console.log("--navigateToDepartment");
    ReactDOM.render(
      <Departments31></Departments31>,
      document.getElementById("root")
    );
  }

  return (
    <div>
      <h2>Welcome to Employee Component...</h2>
      <p>
        <label>
          Employee Count : <b>{employeeCount}</b>
        </label>
      </p>
      <p>
        <label>
          Last Employee Added : <b>{noOfDays} days ago...</b>
        </label>
      </p>
      <button onClick={navigateToDepartment}>Departments</button>
    </div>
  );
}

export default Employee31;
