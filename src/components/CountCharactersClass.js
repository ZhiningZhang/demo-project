import React from "react";

///https://www.youtube.com/watch?v=_C6LRsaxPx0&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=6


class CountCharactersClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      counter: 10,
    };
  }

  //method
  onMessageChange(text) {
    this.setState({
      message: "Message has " + text.length + " number of Characters",
      counter : text.length
    });
  }

  //method
  render() {
   
    return (
      <div>
        <h2>Class: Welcome to Count Characters Component...</h2>
        <p>
          <label>
            Enter Message :{" "}
            <input
              type="text"
              onChange={(e) => this.onMessageChange(e.target.value)}
            ></input>
          </label>
        </p>

        <p>
          <label>{this.state.message}</label>
        </p>
        <p>
          <label>{this.state.counter}</label>
        </p>
      </div>
    );
  }
}

export default CountCharactersClass;
