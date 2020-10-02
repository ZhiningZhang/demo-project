import React from "react";

class OrderInfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onQuantityChange(e.target.value);
  };

  render() {
    return (
      <div style={{ border: "3px solid red" }}>
        <h3>Order Information ...</h3>
        <p>
          <label>
            Product Name :
            <select>
              <option value="AAA">AAA</option>
              <option value="BBB">BBB</option>
              <option value="CCC">DDD</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Enter Quantity :{" "}
            <input
              type="text"
              value={this.props.quantity}
              onChange={this.handleChange}
            ></input>
          </label>
        </p>
      </div>
    );
  }
}

export default OrderInfoComponent;
