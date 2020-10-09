import React, { useState } from "react";
import authentication from "./authentication";

function LogIn(props) {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  function changeLogInData(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function onLogIn() {
    /*     fetch("https://localhost:44362/api/Test", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((r) => r.json())
      .then((result) => {
        if (result) {
          authentication.onAuthentication();
          props.history.push("/home");
        } else {
          alert("Invalid UserName or PassWord");
        }
      }); */

    authentication.onAuthentication();
    props.history.push("/home");
  }

  return (
    <div>
      <h2>Welcome to LogIn...</h2>
      <p>
        <label>
          UserName :{" "}
          <input
            type="text"
            value={loginData.username}
            name="username"
            onChange={changeLogInData}
          ></input>
        </label>
      </p>
      <p>
        <label>
          PassWord :{" "}
          <input
            type="text"
            value={loginData.password}
            name="password"
            onChange={changeLogInData}
          ></input>
        </label>
      </p>
      <button onClick={onLogIn}>LogIn</button>
    </div>
  );
}

export default LogIn;
