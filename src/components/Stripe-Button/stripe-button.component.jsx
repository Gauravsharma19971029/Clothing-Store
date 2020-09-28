import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HWDnYLgSW1Ey9VrS1Ts2R60dvRZtlNYE3wGkLfvJzoLIcjsYSVUTWNmz3tD5Ac0kwkgsU1ZRFsvRlaYxO33WmBW00zgMgdknB'

    const onToken = token =>{
        console.log(token)
    }
        return(
            <StripeCheckout
            label="Pay Now"
            name = "ShopTrendz.in"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your Total is Rs.${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishablekey}
            ></StripeCheckout>
        )

}

export default StripeCheckoutButton;