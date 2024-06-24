/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CardElement, LinkAuthenticationElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";

const CheckOutForm = ({ course, username }) => {
    const { user } = useContext(AuthProvider)
    const navigate = useNavigate()
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const { course_title, _id, owner_email, image_url } = course

    useEffect(() => {
        fetch("https://talentlms-server.onrender.com/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // authorization: `bearer ${localStorage.getItem("Access-Token")}`
            },
            body: JSON.stringify({ price: course?.price })
        })
            .then((response) => response.json())
            .then((data) => setClientSecret(data.clientSecret))
    }, [course?.price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        setIsLoading(true);
        // const { error: confirmError } = await stripe.confirmPayment({
        //     elements,
        //     confirmParams: {
        //         // Make sure to change this to your payment completion page
        //         return_url: `${window.location.origin}/completion`,
        //     },
        // });

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
        } else {
            // toast.success("Payment Successfully");
        }

        const { paymentIntent, error: conformError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: username,
                        email: user?.email,
                    },
                },
            },
        );


        if (conformError) {
            toast.error(conformError.message)
            return;
        }

        if (paymentIntent.status === "succeeded") {
            // toast.success("Payment Successfully");
            const paymentInfo = {
                course_title,
                course_id: _id,
                price: course?.price,
                owner_email,
                student_email: user?.email,
                image_url
            }

            fetch("https://talentlms-server.onrender.com/enroll-course", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem("Access-Token")}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then((response) => response.json())
                .then((data) => {

                    if (data.acknowledged) {
                        toast.success("Payment Successfully");
                        navigate("/my-courses");
                    }
                })
        }
        setIsLoading(false);
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-sm mt-2 btn-info" disabled={!stripe}>
                Pay {course?.price}
            </button>
        </form>
    );
};

export default CheckOutForm;