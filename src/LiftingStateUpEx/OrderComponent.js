import React from "react";
import OrderInfoComponent from "./OrderInfoComponent";
import AddressComponent from "./AddressComponent";
import SummaryComponent from "./SummaryComponent";

class OrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: "", address: "" };
  }

  orderInfoChanged = (val) => {
    this.setState({ quantity: val });
  };

  addressChanged = (val) => {
    this.setState({ address: val });
  };

  orderInfoChanged = (val) => {
    console.log("--- getQuantityChange() = ", val);
    this.setState({ quantity: val });
  };

  addressChanged = (val) => {
    console.log("--- getAddressChange() = ", val);
    this.setState({ address: val });
  };

  render() {
    return (
      <div>
        <OrderInfoComponent
          quantity={this.state.quantity}
          onQuantityChange={this.orderInfoChanged}
        />

        <AddressComponent
          address={this.state.address}
          onAddressChange={this.addressChanged}
        />

        <SummaryComponent
          quantity={this.state.quantity}
          address={this.state.address}
          onQuantityChange={this.orderInfoChanged}
        />

        <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
}

export default OrderComponent;
