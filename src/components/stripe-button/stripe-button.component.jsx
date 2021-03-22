import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const CURRENCY = 'EUR';
  const publishableKey = 'pk_test_51HyICRIp2NuwooqEI1f174tJSRW62mg9U4VfMqDvYNid50KI99aj8eqCP1u2XCR0aefzmeUBDkP7ahxsxwtnlFHU00AqQb7bf7';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      currency={CURRENCY}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;