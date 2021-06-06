import React from "react";
import StripeCheckOut from "react-stripe-checkout";

type StripePrice = {
  price: any;
};

const StripeCheckOutButton: React.FC<StripePrice> = ({ price }) => {
  const publishKey =
    "pk_test_51IzK7aSCfY4q7eozOMx1Ot0Ntmz5XhBPxPhpOf7ilSJOOUCEEPw1jWl43nNhn8GcWGRqq1NciLO7OzrYHgmXUE7p00My8d94GB";
  const stripePrice = price * 100;

  return (
    <StripeCheckOut
      label="Pay Now"
      name="ECOM LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is ${price}`}
      panelLabel="Pay Now"
      token={(token) => alert("successful")}
      amount={stripePrice}
      stripeKey={publishKey}
    />
  );
};

export default StripeCheckOutButton;
