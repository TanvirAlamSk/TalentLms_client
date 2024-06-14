/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const CheckOutForm = ({ course, price }) => {
    // eslint-disable-next-line no-unused-vars
    const [clientSecret, setClientSecret] = useState("")
    const [proseccing, setProseccing] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()
    const { title, id } = course


    useEffect(() => {
        fetch("https://talentlms-server.onrender.com/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // authorization: `bearer ${localStorage.getItem("Access-Token")}`
            },
            body: JSON.stringify({ price })
        })
            .then((response) => response.json())
            .then((data) => setClientSecret(data.clientSecret))
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            toast.error(error.message)
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProseccing(true)
        //---------------------------------------
        const { paymentIntent, error: conformError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: "patientName",
                        email: "email",
                    },
                },
            },
        );
        if (conformError) {
            toast.error(conformError.message)
            setProseccing(false)
            return;
        }
        if (paymentIntent.status === "succeeded") {
            toast.success("Payment Successfully");
            const paymentInfo = {
                price
            }
            fetch(`https://talentlms-server.onrender.com/${id}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                    // authorization: `bearer ${localStorage.getItem("Access-Token")}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        setProseccing(false)
                        toast.success("Payment Successfully");
                        navigate("/dashboard");
                    }
                })
        }
        // 
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {/*  || !clientSecret || proseccing */}
            <button type="submit" className="btn btn-sm mt-2 btn-info" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;