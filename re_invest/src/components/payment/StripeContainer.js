import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51LGDr7C535An2GhSSb5dsgsCClHqOz5DywWqhsfRkNgARJJlBReqNd71tLDUDlvdKuzRhOj7Tk0Uas6K9ScRZ3ye00LmT2W7B9"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise} >
     <PaymentForm />
  </Elements>
  )
}
