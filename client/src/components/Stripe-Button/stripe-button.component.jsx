import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import { clearCart } from "../../redux/cart/cart.action";

const StripeCheckoutButton = ({ price,clearCart }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51HWDnYLgSW1Ey9VrS1Ts2R60dvRZtlNYE3wGkLfvJzoLIcjsYSVUTWNmz3tD5Ac0kwkgsU1ZRFsvRlaYxO33WmBW00zgMgdknB";

  const onToken = (token) => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
        clearCart();
      })

      .catch((error) => {
        console.log("Payment error", error);
        alert("Payment Failed \n Please Check your card number");
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="ShopTrendz.in"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total is Rs.${price}`}
      amount={priceForStripe}
      currency="inr"
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    ></StripeCheckout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
