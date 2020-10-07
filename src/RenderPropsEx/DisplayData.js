import React from "react";

class DisplayData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.list.map((d) => (
          <li>{d}</li>
        ))}
      </ul>
    );
  }
}

export default DisplayData;
