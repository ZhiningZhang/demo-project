import React from "react";
import A0102 from "./A0102";
import { myContext } from "./myContext";

class A0101 extends React.Component {
  static contextType = myContext;

  render() {
    //console.log(this.context);

    return (
      <div className="border border-primary m-2 p-2">
        --- A-01-01 --- <A0102 />
        <br />
       
      </div>
    );
  }
}

export default A0101;
