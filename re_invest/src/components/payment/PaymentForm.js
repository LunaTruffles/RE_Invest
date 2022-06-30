
import React, { useState } from 'react'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from "axios"
import Button from '@mui/material/Button';

const CARD_OPTIONS =  {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#000000',
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#87bbfd',
        },
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee',
      },
    },
  };

export default function PaymentForm() {

    const [ success, setSuccess ] = useState(false)
    const stripe = useStripe ()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod ({
            type: 'card',
            card: elements.getElement(CardElement)
        })
    

    if (!error) {
        try{
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:3000", {
                amount: 1000,
                id
            })

            if(response.date.success) {
                console.log("Successful Payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error: ", error)
        } 
    } else {
        console.log(error.message)
    }
}

  return (

    <>
        {!success ?
        <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FromRow">
                        <CardElement options={CARD_OPTIONS} />
                    </div>
                </fieldset>
                  <Button 
                    variant="contained" 
                    color="success" 
                    type='submit'
                    sx={{ marginTop: 2, marginBottom: 2, width: 350 }} 
                  >Give Sam Money</Button> 
        </form>
        :
        <h6>Or not</h6>
        }
    </>
  )
}
