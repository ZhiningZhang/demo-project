import React, { Component, useState, useEffect } from "react";

function EmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [employeeCount, setEmployeeCount] = useState(0);

  useEffect(() => {
    console.log("We are in useEffect function");
    fetch("https://localhost:44362/api/Employee/" + searchText)
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, [searchText, employeeCount]);

  function onSearchTextChange(e) {
    setSearchText(e.target.value);
  }

  function addNewEmployee(prev) {
    //console.log("--- addNewEmployee prev = ", prev);
    setEmployeeCount( employeeCount + 1 );
  }

  return (
    <div>
      <h2>Employees Data...</h2>
      <p>
        <label>
          Search By Name :{" "}
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          ></input>
        </label>
      </p>
      <p>
        <button onClick={addNewEmployee}>Add Employee</button>
        employeeCount : {employeeCount}
      </p>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.Id}>
              <td>{emp.Id}</td>
              <td>{emp.Name}</td>
              <td>{emp.Location}</td>
              <td>{emp.Salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeComponent;
