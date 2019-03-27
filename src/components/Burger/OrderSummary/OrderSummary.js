import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>
          {key}: {props.ingredients[key]}
        </span>
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingrediends:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}$</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button buttonType={"Danger"} clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button buttonType={"Success"} clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
