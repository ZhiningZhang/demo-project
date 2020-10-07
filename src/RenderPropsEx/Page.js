import React from "react";
import Department from "./Department";
import Project from "./Project";
import DisplayData from "./DisplayData";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Department
          render2={(data) => <DisplayData list={data}></DisplayData>}
        ></Department>

        <Project list={["P-1", "P-2", "P-3"]}></Project>
      </React.Fragment>
    );
  }
}

export default Page;
