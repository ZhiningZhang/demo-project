import React from "react";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Projects List...</h2>

        <ul>
          {this.props.list.map((d) => (
            <li>{d}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Project;
