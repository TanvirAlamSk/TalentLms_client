/* eslint-disable react-hooks/rules-of-hooks */
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../../components/Payment/CheckOutForm";
import useGetUserName from "../../hooks/useGetUserName";
const stripePromise = loadStripe('pk_test_51NvGK5BgL9ZEwWJ1lYtOTrKI78oFhF9q182KVQEitCtMK4siG0UHJ5rS5OTo4oOx03MwCCq8aS5WSjbXO2r485wM008sxSt9VS');

const Payment = () => {
    const course = useLoaderData()
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <Loader></Loader>
    }
    // eslint-disable-next-line no-unused-vars
    const { course_title, price } = course
    const username = useGetUserName()
    console.log(username)
    return (
        <div>
            <h3 className="text-2xl">Payment for <span className="text-green-400 font-semibold">{
                course_title}</span></h3>
            <div className="md:w-96 mx-auto mt-8">
                <Elements stripe={stripePromise} >
                    <CheckOutForm
                        course={course}
                        username={username}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;