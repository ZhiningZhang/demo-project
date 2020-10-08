import React from "react";
import Car from "./Car";

const Cars = (props) => (
  <>
    <h4>Cars:</h4>
    {/* Finally we can use data */}
    {Object.keys(props.cars).map((carID) => {
      //console.log(carID);
      return (
        <Car
          key={carID}
          name={props.cars[carID].name}
          price={props.cars[carID].price}
          incrementPrice={() => props.incrementCarPrice(carID)}
          decrementPrice={() => props.decrementCarPrice(carID)}
        />
      );
    })}
  </>
);

export default Cars;
