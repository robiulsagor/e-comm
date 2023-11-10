'use client'

import { useCart } from "@/hooks/useCart"
import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import axios from "axios"
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm"
import Button from "../components/Button"
import { SafeUser } from "@/types"

const stripePromise = loadStripe("pk_test_51MAOjhI02v67lyXs6Hoy0ceOub3WzyUYhKg9rgrIIUqfkrogcZfprXRoZoEJpzfGalWvEljtHQm4KCWOx53pGVuW00GGDNvse8");


const CheckoutClient: React.FC = () => {
    const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    const [paymentSuccess, setPaymentSuccess] = useState(false)

    const router = useRouter()

    useEffect(() => {
        if (cartProducts) {
            setLoading(true)
            setError(false)

            axios.post("/api/create-payment-intent", {
                items: cartProducts,
                payment_intent_id: paymentIntent
            }).then((res) => {
                setClientSecret(res.data.paymentIntent.client_secret)
                handleSetPaymentIntent(res.data.paymentIntent.id)
                setLoading(false)
            }).catch(err => {
                console.log(err);
            })
        }
    }, [cartProducts, paymentIntent])

    const options: StripeElementsOptions = {
        clientSecret,
        appearance: {
            theme: "stripe",
            labels: "floating"
        }
    }

    const handleSetPaymentSuccess = useCallback((value: boolean) => {
        setPaymentSuccess(value)
    }, [])

    return (
        <div className="w-full">
            {clientSecret && cartProducts && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm clientSecret={clientSecret} handleSetPaymentSuccess={handleSetPaymentSuccess} />
                </Elements>
            )}
            {loading && <p className="text-center">Loading Checkout</p>}
            {error && <p className="text-center text-rose-500">Something went wrong</p>}
            {paymentSuccess && (
                <div className="flex flex-col items-center gap-4">
                    <div className="text-teal-400">
                        Payment Success
                    </div>
                    <div className="w-full max-w-[220px]">
                        <Button label="View Your Order" onClick={() => router.push("/order")} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CheckoutClient