import ReactDOM from "react-dom";
import React, { Component, useState, useContext } from "react";

//part 33
//https://www.youtube.com/watch?v=QXKZ3_iCYcA&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=33

//part 34
//https://www.youtube.com/watch?v=PMEO0Vrq56o&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=34
//https://www.pragimtech.com/blog/reactjs/usecontext-part-2-in-react/

const employeeContext = React.createContext();

function App33() {
  const [employee, setEmployee] = useState({
    Id: 101,
    Name: "Pragim",
    Location: "Bangalore",
    Salary: 500,
    EmployeeType: "Contract",
  });

  return (
    <div>
      <h2>Welcome to App Component...</h2>
      <p>
        <label>
          Employee Salary : <b>{employee.Salary} </b>
        </label>
      </p>

      <employeeContext.Provider
        value={{ data: employee, updateEmployee: setEmployee }}
      >
        <Employee></Employee>
      </employeeContext.Provider>
    </div>
  );
}

function Employee() {
  let context = useContext(employeeContext);

  function changeEmploymentType() {
    context.updateEmployee({ ...context.data, EmployeeType: "Permanent" });
  }

  return (
    <div>
      <h2>Welcome to Employee Component...</h2>
      <p>
        <label>
          Employee ID : <b>{context.data.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Name : <b>{context.data.Name}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Salary : <b>{context.data.Salary}</b>
        </label>
      </p>
      1111
      {context.data.EmployeeType === "Permanent" ? (
        <Permanent></Permanent>
      ) : (
        <Contract></Contract>
      )}
      2222
      <employeeContext.Consumer>
        {(value) =>
          value.data.EmployeeType === "Permanent" ? (
            <Permanent></Permanent>
          ) : (
            <Contract></Contract>
          )
        }
      </employeeContext.Consumer>
      <button onClick={changeEmploymentType}> Make Permanenet</button>
      <Salary></Salary>
    </div>
  );
}

function Salary() {
  let context = useContext(employeeContext);

  function updateSalary() {
    context.updateEmployee({
      ...context.data,
      Salary: context.data.Salary + 1000,
    });
  }

  return (
    <div>
      <h2>Welcome to Salary Component...</h2>
      <p>
        <label>
          Employee ID : <b>{context.data.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Salary : <b>{context.data.Salary}</b>
        </label>
      </p>
      <button onClick={updateSalary}>Update</button>
    </div>
  );
}

function Permanent() {
  let context = useContext(employeeContext);
  return (
    <div>
      <h2>Permanent Component Contents...</h2>
      <p>
        <label>
          Employee Salary : <b>{context.data.Salary}</b>
        </label>
      </p>
    </div>
  );
}

function Contract() {
  let context2 = useContext(employeeContext);
  return (
    <div>
      <h2>Contract Component Contents...</h2>
      <p>
        <label>
          Employee Salary : <b>{context2.data.Salary}</b>
        </label>
      </p>
    </div>
  );
}

export default App33;
