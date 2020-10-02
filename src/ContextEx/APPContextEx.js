import React from "react";
import A0101 from "./A0101";
import A0102 from "./A0102";
import { myContext } from "./myContext";

class APPContextEx extends React.Component {
  constructor(props) {
    super(props);
    this.data = { name: "Andy", age: 19 };

    this.myRef = React.createRef("Andy");

    this.state = {
      name: "Andy",
      age: 10,
    };
  }

  onNameChange(e) {
    //console.log("---onNameChange = " + e.target.value);

    this.setState({
      name: e.target.value,
    });
  }

  onAgeChange(e) {
 
    this.setState({
      age: e.target.value,
    });
  }

  render() {
    //console.log(this.state);

    return (
      <div>
        <myContext.Provider value={this.state}>
          <div>--- APPContextEx ---</div>
          <A0101 />
          <br />
          <A0102 />
        </myContext.Provider>

        <input
          onChange={(e) => this.onNameChange(e)}
          type="text"
          defaultValue="Andy"
        ></input>
        <input
          onChange={(e) => this.onAgeChange(e)}
          type="text"
          defaultValue="10"
        ></input>
      </div>
    );
  }
}

export default APPContextEx;
