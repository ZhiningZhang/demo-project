import React from "react";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.userNameRef = React.createRef();
  }

  componentDidMount() {
      this.userNameRef.current.focus();
  }

  render() {
    //alert("Test Message");
    console.log("Test Message");

    return (
      <div>
        <h2>LogIn Screen...</h2>

        <p>
          <label>
            UserName : <input type="text" ref={this.userNameRef}></input>
          </label>
        </p>

        <p>
          <label>
            PassWord : <input type="text"></input>
          </label>
        </p>

        <button>LogIn</button>
      </div>
    );
  }
}

export default LogIn;
