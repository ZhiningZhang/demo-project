import React from "react";
import { myContext } from "./myContext";

class A0102 extends React.Component {
  static contextType = myContext;

  render() {
    return (
      <div className="border border-success m-2 p-2">
        --- A-01-02 ---
        <br />
        {this.context.name} {this.context.age}
      </div>
    );
  }
}

export default A0102;
