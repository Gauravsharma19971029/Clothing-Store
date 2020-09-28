import React from 'react'
import CustomButton from '../CustomButton/custom-button.component'
import './cart-component.styles.scss'
import CartItem from '../Cart-Item/cart-item.component'
import {connect} from 'react-redux'
const CartDropdown = ({cartItems}) => 
(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item = {cartItem}></CartItem>
                ))
            }
        </div>
        <CustomButton>Go To Checkout</CustomButton>

    </div>

)

const mapStateToprops = ({cart:{cartItems}}) => (
    {
        cartItems
    }
)

export default connect(mapStateToprops)(CartDropdown)