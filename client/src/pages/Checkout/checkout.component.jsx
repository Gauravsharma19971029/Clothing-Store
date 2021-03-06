import React from "react";
import "./checkout.component.scss";

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItems,selectCartTotal } from "../../redux/cart/cart.selector";
import StripeButton from '../../components/Stripe-Button/stripe-button.component'

import CheckoutItem  from '../../components/Checkout-Item/checkout-item.component'

const CheckoutPage = ({cartItems,total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
        cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
    }
    <div className='total'>
<span>TOTAL : Rs.{total}</span>

    </div>
    <div className="test-warning">
      *Please  Use the following credit card
      4242 4242 4242 4242
    </div>
    <StripeButton price={total}></StripeButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
