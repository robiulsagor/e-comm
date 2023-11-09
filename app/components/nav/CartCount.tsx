'use client'

import { useCart } from "@/hooks/useCart"
import Link from "next/link"
import { CiShoppingCart } from "react-icons/ci"

const CartCount = () => {
    const { cartTotalQty } = useCart()

    return (
        <Link href='/cart' className="cursor-pointer relative">
            <CiShoppingCart size={24} />
            <span className="absolute -top-4 -right-4 bg-slate-700 text-slate-100  rounded-full text-sm px-2 py-1 h-6 w-6 flex items-center justify-center">
                {cartTotalQty || 0}
            </span>
        </Link>
    )
}

export default CartCount