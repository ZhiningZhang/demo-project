import React from "react";
import { useState, useEffect } from "react";

function EmployeePersonalInfo(props) {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    fetch("https://localhost:44362/api/Employee/" + props.match.params.id)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  },[]);
  function changeEmployeeData(e) {}

  if (employee === null) return null;

  return (
    
    <div>
      <h2>Employee Details...</h2>
      <p>
        <label>
          Employee ID :{" "}
          <input
            type="text"
            name="Id"
            value={employee.Id}
            onChange={changeEmployeeData}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Employee Name :{" "}
          <input
            type="text"
            name="Name"
            value={employee.Name}
            onChange={changeEmployeeData}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Employee Location :{" "}
          <input
            type="text"
            name="Location"
            value={employee.Location}
            onChange={changeEmployeeData}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Employee Salary :{" "}
          <input
            type="text"
            name="Salary"
            value={employee.Salary}
            onChange={changeEmployeeData}
          ></input>
        </label>
      </p>
      <button>Update</button>
    </div>
  );
}

export default EmployeePersonalInfo;
