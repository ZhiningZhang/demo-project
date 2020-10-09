import React, { useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Switch,
  Route,
  Redirect,
  Prompt,
} from "react-router-dom";

function EditProfile() {
  let [isDataChanged, setDataChanged] = useState(false);

  let [userInfo, setUserInfo] = useState({
    firstName: "Pragim",
    lastName: "Technologies",
    userName: "Pragim Tech",
    emailId: "Pragim@gmail.com",
    contactNo: "+91-9945699393",
  });

  function saveChanges() {
    setDataChanged(false);
  }
  function onUserDataChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    setDataChanged(true);
  }
  return (
    <div>
      <Prompt
        when={isDataChanged}
        message={() =>
          "There are Some Unsaved Changes. Do you want to go Away?"
        }
      ></Prompt>
      <h2>Welcome to Edit Profile...</h2>
      <p>
        <label>
          First Name :{" "}
          <input
            type="text"
            name="firstName"
            onChange={onUserDataChange}
            value={userInfo.firstName}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Last Name :{" "}
          <input
            type="text"
            name="lastName"
            onChange={onUserDataChange}
            value={userInfo.lastName}
          ></input>
        </label>
      </p>
      <p>
        <label>
          User Name :{" "}
          <input
            type="text"
            name="userName"
            onChange={onUserDataChange}
            value={userInfo.userName}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Email ID :{" "}
          <input
            type="text"
            name="emailId"
            onChange={onUserDataChange}
            value={userInfo.emailId}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Contact Number :{" "}
          <input
            type="text"
            name="contactNo"
            onChange={onUserDataChange}
            value={userInfo.contactNo}
          ></input>
        </label>
      </p>
      <button onClick={saveChanges}>Save</button>
    </div>
  );
}

export default EditProfile;
