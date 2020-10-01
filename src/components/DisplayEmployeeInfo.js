import React  from "react";

//Introduction to React Components
//https://www.youtube.com/watch?v=FMl8vXPGqCI&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=4


function DisplayEmployeeInfo(props) {
  
  return (
    <div>
      <p>
        <label>Employee ID:</label>
        <b>{props.Id}</b>
      </p>
      <p>
        <label>Employee Name:</label>
        <b>{props.Name}</b>
      </p>
      <p>
        <label>Employee Location:</label>
        <b>{props.Location}</b>
      </p>
      <p>
        <label>Employee Salary:</label>
        <b>{props.Salary}</b>
      </p>
    </div>
  );
}

export default DisplayEmployeeInfo;
