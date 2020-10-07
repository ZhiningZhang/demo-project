import React from "react";
import ReactDOM from "react-dom";
import Reports from "./Reports";


//componentWillUnmount
//https://www.youtube.com/watch?v=sfHnY2oSe9c&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=26

class ChangeDetection extends React.PureComponent {
  handle = null;
  constructor(props) {
    super(props);

    this.state = {
      employeeCount: 0,
    };

    this.handle = setInterval(() => {
      console.log("--- fetch data ---");
      fetch("https://localhost:44362/api/Employee")
        .then((res) => res.json())

        .then((result) => {
          this.setState({
            employeeCount: result.length,
          });
        });
    }, 5000);
  }

  showReports = () => {
    console.log("--- showReports() ---");
    ReactDOM.render(<Reports></Reports>, document.getElementById("root"));
  };

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    console.log("Notification Message");

    return (
      <div>
        <h2>Welcome to Pure Component Demonstration...</h2>

        <p>
          <label>
            Number of Employees are : <b>{this.state.employeeCount}</b>
          </label>
        </p>
        <button onClick={this.showReports}>Show Reports</button>
      </div>
    );
  }
}

export default ChangeDetection;
