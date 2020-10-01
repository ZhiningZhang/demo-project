import React, { useRef } from "react";

function Salary(props) {
  const refBasic = useRef(null);
  const refHRA = useRef(null);
  const refSpecialAllowance = useRef(null);

  const updateSalary = (e) => {
    console.log("--- Salary.updateSalary() ---");
    console.log(refBasic.current.value);

    let salary = parseInt(refBasic.current.value) + parseInt(refHRA.current.value) + parseInt(refSpecialAllowance.current.value);

    props.onSalaryChanged(salary);
  };

  return (
    <div>
      <h1>Salary Details...</h1>
      <p>
        <label>
          Basic Salary : <b>{props.BasicSalary}</b>
          <input type="text" ref={refBasic} defaultValue={props.BasicSalary} />
        </label>
      </p>
      <p>
        <label>
          HRA : <b>{props.HRA}</b>
          <input type="text" ref={refHRA} defaultValue={props.HRA} />
        </label>
      </p>
      <p>
        <label>
          Special Allowance : <b>{props.SpecialAllowance}</b>
          <input type="text" ref={refSpecialAllowance} defaultValue={props.SpecialAllowance} />
        </label>
      </p>
      <button onClick={updateSalary}>Update</button>
    </div>
  );
}

export default Salary;
