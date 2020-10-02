import React from "react";

class SummaryComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onQuantityChange(e.target.value);
  };

  render() {
    return (
      <div style={{ border: "3px solid red" }}>
        <h2>Summary...</h2>

        <p>
          <label>
            Product Name : <b>AAA</b>
          </label>
        </p>

        <p>
          <label>
            Product Quantity :
            <input
              type="text"
              value={this.props.quantity}
              onChange={this.handleChange}
            ></input>
          </label>
        </p>

        <p>
          <label>
            Address : <b>{this.props.address}</b>
          </label>
        </p>

        <button>Place Order</button>
      </div>
    );
  }
}

export default SummaryComponent;
