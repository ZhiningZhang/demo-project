import React from "react";

function Home(props) {
  function onNext() {
    props.history.replace("/editprofile");
  }
  return (
    <div>
      <h2>Welcome to Home...</h2>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default Home;
