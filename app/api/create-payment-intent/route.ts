import Stripe from "stripe";
import prisma from "@/libs/prismadb"
import { CartProductType } from "@/app/components/Products/ProductDetails";
import { getCurrentUser } from "@/actions/getUserFromDB";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16"
})

const calculateOrderAmount = (items: CartProductType[]) => {
    const totalPrice = items.reduce((acc, item) => {
        const itemTotal = item.price * item.quantity
        return acc + itemTotal
    }, 0)
    const price: any = Math.floor(totalPrice)
    return price
}

export async function POST(req: Request) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return Response.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const { items, payment_intent_id } = body

    const total = calculateOrderAmount(items) * 100

    const orderData = {
        user: { connect: { id: currentUser.id } },
        amount: total,
        currency: "usd",
        status: 'pending',
        deliveryStatus: 'pending',
        paymentIntentId: payment_intent_id,
        products: items
    }

    console.log(orderData);


    if (payment_intent_id) {
        const current_intent = await stripe.paymentIntents.retrieve(payment_intent_id)

        if (current_intent) {
            const updated_intent = await stripe.paymentIntents.update(
                payment_intent_id,
                { amount: total }
            )
            const [existing_order, update_order] = await Promise.all([
                prisma.order.findFirst({
                    where: { paymentIntentId: payment_intent_id }
                }),
                prisma.order.update({
                    where: { paymentIntentId: payment_intent_id },
                    data: {
                        amount: total,
                        products: items
                    }
                })
            ])

            if (!existing_order) {
                return Response.json({ error: "Invalid payment intent." }, { status: 400 })
            }

            return Response.json({ paymentIntent: updated_intent })
        }


    } else {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
            automatic_payment_methods: { enabled: true }
        })

        orderData.paymentIntentId = paymentIntent.id

        await prisma.order.create({
            data: orderData
        })

        return Response.json({ paymentIntent })
    }

}