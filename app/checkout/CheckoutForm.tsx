"use client"

import { useCart } from "@/hooks/useCart"
import { formatePrice } from "@/utils/formatePrice"
import { AddressElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import Heading from "../components/Heading"
import Button from "../components/Button"

interface CheckoutFormProps {
    clientSecret: string,
    handleSetPaymentSuccess: (value: boolean) => void
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ clientSecret, handleSetPaymentSuccess }) => {
    const { cartTotalAmount, handleRemoveAllProductFromCart, handleSetPaymentIntent } = useCart()
    const stripe = useStripe()
    const elements = useElements()
    const [loading, setLoading] = useState(false)
    const formatedPrice = formatePrice(cartTotalAmount)

    useEffect(() => {
        if (!stripe) {
            return
        }
        if (!clientSecret) {
            return
        }

        handleSetPaymentSuccess(false)
    }, [stripe])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true)

        stripe.confirmPayment({
            elements,
            redirect: "if_required"
        }).then(result => {
            if (!result.error) {
                toast.success("Checkout success!")
                handleRemoveAllProductFromCart()
                handleSetPaymentSuccess(true)
                handleSetPaymentIntent(null)
            }

            setLoading(false)
        })
    }

    return (
        <form onSubmit={handleSubmit} id="payment-form">
            <div className="mb-6">
                <Heading title="Enter your details to complete checkout" />
            </div>
            <h2 className="mt-4 mb-2 font-bold">Address Information</h2>
            <AddressElement options={{ mode: "shipping", allowedCountries: ['US', 'BD'] }} />

            <h2 className="mt-4 mb-2 font-bold">Payment Information</h2>

            <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
            <div className="font-bold text-center text-xl my-5">
                Total: {formatedPrice}
            </div>

            <Button
                label={loading ? "Processing" : "Pay Now"}
                disabled={loading || !stripe || !elements}
                onClick={() => { }}
            />

        </form>
    )
}

export default CheckoutForm