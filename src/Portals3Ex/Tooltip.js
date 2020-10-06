import React, { Component } from "react";
import ReactDOM from "react-dom";

//https://www.youtube.com/watch?v=TGRWiJTx4Ac

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.domNode = document.createElement("div");
    document.body.appendChild(this.domNode);
  }
  render() {
    return ReactDOM.createPortal(<h4 style={{position: 'absolute', top: '50%', left:'50%'}}>Hi I am a tooltip</h4>, this.domNode);
  }
}

export default Tooltip;
