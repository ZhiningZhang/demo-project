import React, { Profiler } from "react";
import NewAccountReports from "./NewAccountReports";
import LoansRepaymentReports from "./LoansRepaymentReports";

//Profiler in React
//https://www.youtube.com/watch?v=AgLqF1pecvk&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=23

//https://www.pragimtech.com/blog/reactjs/profiler-in-react/

class ReportsDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  callbackFunction = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,

    commitTime,
    interaction
  ) => {
    console.log("Id is : " + id + ", Phase is : " + phase);

    console.log(
      "Actual Duration is : " +
        actualDuration +
        " and Base Duration is :" +
        baseDuration
    );
  };

  render() {
    return (
      <React.Fragment>
        <h2>Welcome to Reports Dashboard...</h2>

        <Profiler id="newAccounts" onRender={this.callbackFunction}>
          <NewAccountReports></NewAccountReports>
        </Profiler>

        <LoansRepaymentReports></LoansRepaymentReports>
      </React.Fragment>
    );
  }
}

export default ReportsDashboard;
