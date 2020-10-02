import React from "react";

//https://www.youtube.com/watch?v=0_WjMxGMzP4&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=13
//How to build forms in react

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        Id: "111",
        Name: "Andy",
        Location: "Shanghai",
        Salary: "123000",
      },
    };
  }

  //property
  changeHandler = (e) => {
    console.log("--- changeHandler = ", e.target.name, e.target.value);

    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      employee: {
        ...this.state.employee,
        [name] : value
      },
    });
  };

  onCreateEmployee = () => {
    console.log(this.state.employee);
  };

  render() {
    return (
      <div>
        <h3>EmployeeComponent</h3>
        <form>
          <p>
            <label>
              Employee ID :
              <input
                type="text"
                name="Id"
                defaultValue={this.state.employee.Id}
                onChange={this.changeHandler}
              ></input>
            </label>
          </p>

          <p>
            <label>
              Employee Name :
              <input
                type="text"
                name="Name"
                defaultValue={this.state.employee.Name}
                onChange={this.changeHandler}
              ></input>
            </label>
          </p>

          <p>
            <label>
              Employee Location :
              <input
                type="text"
                name="Location"
                defaultValue={this.state.employee.Location}
                onChange={this.changeHandler}
              ></input>
            </label>
          </p>

          <p>
            <label>
              Employee Salary :
              <input
                type="text"
                name="Salary"
                defaultValue={this.state.employee.Salary}
                onChange={this.changeHandler}
              ></input>
            </label>
          </p>
        </form>
        <button onClick={this.onCreateEmployee}> Create </button>

        <p>
            {JSON.stringify(this.state.employee)}
        </p>
      </div>
    );
  }
}

export default EmployeeComponent;
