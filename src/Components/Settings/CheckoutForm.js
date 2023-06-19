import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = () => {
    const [isProcessing, setIsPrcessing] = useState(null);
    const [message, setMessage] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const formSubmitHandler = async (event) => {
        setIsPrcessing(true);
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}`,
            },
            redirect: 'if_required',
        });
        if (error) {
            console.log(error.message);
        }
        else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setMessage(`Payment Staus ${paymentIntent.status}`)
        }
        else {
            setMessage('unexpected state')
        }
        setIsPrcessing(false);

    }
    return (
        <form onSubmit={formSubmitHandler}>
            <PaymentElement />
            <button disabled={!stripe}>{isProcessing ? 'Loading...' : 'Submit'}</button>
        </form>
    );
};
export default CheckoutForm;