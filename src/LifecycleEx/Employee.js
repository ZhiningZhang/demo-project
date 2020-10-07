import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);

    //cannot setState in constructor
    //this.setState({Id: 101});

    this.state = { Id: 101, Name: "" };
  }

  componentDidMount() {
    this.setState({ Id: 200 });
  }

  changeName = (e) => {
    console.log("--- changeName = ", e);
    this.setState({Name: e.target.value});
  };

  render() {
    return (
      <div>
        <h2>Welcome to Employee Component...</h2>
        {this.state.Id}
        <p>
          <label>
            Employee Name:{" "}
            <input
              type="text"
              value={this.state.Name}
              onChange={this.changeName}
            ></input>
          </label>
        </p>
        <p>
            Name: {this.state.Name}
        </p>
      </div>
    );
  }
}

export default Employee;
