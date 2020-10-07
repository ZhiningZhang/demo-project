import React from "react";

class Reports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  componentDidMount = () => {
    this.getEmployees();
  };

  getEmployees() {
    fetch("https://localhost:44362/api/Employee")
      .then((res) => res.json())

      .then((result) => {
        this.setState({
          employees: result,
        });
      });
  }

  loadEmployees = () => {
    this.getEmployees();
  };

  render() {
    return (
      <div>
        <h2>Employees Data...</h2>

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
            {this.state.employees.map((emp) => (
              <tr key={emp.Id}>
                <td>{emp.Id}</td>

                <td>{emp.Name}</td>

                <td>{emp.Location}</td>

                <td>{emp.Salary}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p>
          <button onClick={this.loadEmployees}>Reload</button>
        </p>
      </div>
    );
  }
}

export default Reports;
