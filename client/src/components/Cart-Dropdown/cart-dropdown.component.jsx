import React from "react";
import CustomButton from "../CustomButton/custom-button.component";
import "./cart-component.styles.scss";
import CartItem from "../Cart-Item/cart-item.component";

import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import {createStructuredSelector} from 'reselect'

import { toggleCartHidden} from '../../redux/cart/cart.action'

const CartDropdown = ({ cartItems, history,dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
        {
            cartItems.length ? (

                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem}></CartItem>
                  ))

            ): <span className="empty-message"> Your Cart is Empty</span>
        }

    </div>
    <CustomButton onClick = {() =>{ 
      history.push('/checkout')
      dispatch(toggleCartHidden())
      }}>Go To Checkout</CustomButton>
  </div>
);

const mapStateToprops = createStructuredSelector ({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToprops)(CartDropdown));
