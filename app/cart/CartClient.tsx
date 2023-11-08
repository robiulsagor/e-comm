
"use client"
import { useCart } from "@/hooks/useCart"
import Link from 'next/link'
import { BiArrowBack } from "react-icons/bi"
import Heading from "../components/Heading"
import Button from "../components/Button"
import ItemContent from "./ItemContent"
import { formatePrice } from "@/utils/formatePrice"

const CartClient = () => {
    const { cartProducts, handleRemoveAllProductFromCart, cartTotalAmount } = useCart()

    // if no products added to cart
    if (cartProducts == null || cartProducts.length === 0) {
        return <div className=' text-center h-72  flex items-center justify-center flex-col'>
            <h2 className='text-xl font-bold mb-10'> Your cart is empty. Please add something to buy.</h2>
            <Link href="/" className='border-[2px] border-slate-500 rounded px-2 py-2 hover:bg-black hover:text-white transition-all flex w-[90%] sm:w-[40%] md:w-[30%] mx-auto gap-2 text-center items-center justify-center cursor-pointer'>
                <BiArrowBack size={24} />
                Continue Shopping..
            </Link>
        </div>
    }

    // if there is at least one product added to cart
    return (
        <div>
            <Heading title="Shopping Cart" center />
            <div className="grid grid-cols-5 mt-8 text-sm gap-4 mb-2">
                <div className="col-span-2 justify-self-start">PRODUCTS</div>
                <div className=" justify-self-center">PRICE</div>
                <div className=" justify-self-center">QUANTITY</div>
                <div className=" justify-self-end">TOTAL</div>
            </div>
            <div>
                {cartProducts && cartProducts.map((item) => {
                    return <ItemContent key={item.id} item={item} />
                })}
            </div>
            <div className="flex justify-between border-t-[1.2px] border-slate-200 py-4">
                <div className="w-[100px]">
                    <Button label="Clear Cart" onClick={handleRemoveAllProductFromCart} small outline />
                </div>
                <div className="text-sm flex flex-col gap-3">
                    <div className="flex items-center justify-between font-bold text-base">
                        <span>Subtotal</span>
                        <span>
                            {formatePrice(cartTotalAmount)}
                        </span>
                    </div>
                    <p className="text-slate-500">Taxes and shipping calculate at checkout</p>
                    <Button label="Checkout" onClick={() => { }}
                    />
                    <Link href="/" className='px-2 py-3 text-slate-500 hover:text-slate-800 transition-all flex w-full rounded  mx-auto gap-2 text-center items-center justify-start cursor-pointer'>
                        <BiArrowBack size={24} />
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartClient