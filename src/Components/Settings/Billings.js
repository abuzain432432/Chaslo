import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Billings() {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecretKey, setClientSecretKey] = useState(null);
    useEffect(() => {
        const loadStripePublishKey = async () => {
            try {
                const response = await fetch('');
                if (response.ok) {
                    throw new Error('Something went wrong')
                }
                const { publishableKey } = await response.json();
                setStripePromise(loadStripe(publishableKey));
            }
            catch (error) {
                console.log(error.message);
            }
        };
        loadStripePublishKey();
    }, [])

    useEffect(() => {
        const loadStripeSecretKey = async () => {
            try {
                const response = await fetch('', {
                    method: 'POST',
                    body: JSON.stringify({})
                });
                if (response.ok) {
                    throw new Error('something went wrong');
                }
                const { clientSecret } = await response.json();
                setClientSecretKey(clientSecret)
            }
            catch (error) {
                console.log(error)
            }
        }
        loadStripeSecretKey();
    })

    return (
        <div>
            <Elements stripe={stripePromise} options={{ clientSecret: clientSecretKey }}>
                {clientSecretKey && stripePromise && <CheckoutForm />}
            </Elements>
        </div>
    )
}
