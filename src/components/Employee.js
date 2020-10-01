import React, {useState}  from "react";
import Salary from './Salary'

//Introduction to React Components
//https://www.youtube.com/watch?v=FMl8vXPGqCI&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=4


function Employee(props) {


    const [updatedSalary, setUpdatedSalary] = useState(null);

    const getUpdatedSalary = (salary) =>
    {
        console.log('--- Employee.getUpdatedSalary() ---',salary);
        console.log();

        setUpdatedSalary(salary);
    }
  
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

      <p>
        <label>Updated Total Salary:</label>
        <b>{updatedSalary}</b>
      </p>
      <Salary BasicSalary={props.BasicSalary} HRA={props.HRA} SpecialAllowance={props.SpecialAllowance} onSalaryChanged = {getUpdatedSalary}></Salary>

    </div>
  );
}

export default Employee;
