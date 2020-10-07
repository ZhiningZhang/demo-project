import React from "react";

class Department extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Dev", "Big Data", "Mobility"],
    };
  }

  render() {
    return (
      <div>
        <h2>Department List...</h2>

        {this.props.render2(this.state.list)}

      </div>
    );
  }
}

export default Department;
