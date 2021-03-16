import React from 'react';
import StripeChackout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IVBn8C7gWiKmz6a6n6ZRspy5ZLqqtCR8EDpKBmm0o1RTM83IxQ7d5AlLYyKhmCqhPT9XrQN8zltzi9P8vIE31r000LY4fm3yk';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');

    }
    return(
        <StripeChackout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;