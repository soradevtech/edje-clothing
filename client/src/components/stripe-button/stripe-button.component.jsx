import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51JScbHBIco0fj1qe12bPRsyfxpJwBQFMS4CAuUEz5RaMW6kci0Dh8SqP7Oz3QRGp9grtWdszt2Z41Zy1dRVmh5U600ydLSMdaF";

    const onToken = (token) => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then((response) => {
                alert("Payment successful");
            })
            .catch((error) => {
                console.log("Payment error: ", JSON.parse(error));
                alert(
                    "There was an issue with your payment. Please make sure you use the provided credit card."
                );
            });
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="3DG3 Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da" // check back on this property
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
