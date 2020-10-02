import React from "react";
import UserPreferredAddressList from "./UserPreferredAddressList";
import CustomErrorBoundary from "./CustomErrorBoundary";

class AddressComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onAddressChange(e.target.value);
  };

  render() {
    return (
      <div style={{ border: "3px solid red" }}>
        <h2>Address Information...</h2>

        <p>
          <label>
            Address :{" "}
            <textarea
              value={this.props.address}
              onChange={this.handleChange}
            ></textarea>
          </label>
        </p>
        <CustomErrorBoundary>
          <UserPreferredAddressList></UserPreferredAddressList>
        </CustomErrorBoundary>
      </div>
    );
  }
}

export default AddressComponent;
