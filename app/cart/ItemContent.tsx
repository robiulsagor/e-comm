"use client"

import { formatePrice } from "@/utils/formatePrice"
import { CartProductType } from "../components/Products/ProductDetails"
import SetQuantity from "../components/Products/SetQuantity"
import { truncate } from "@/utils/truncate"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/hooks/useCart"

interface ItemContentProps {
    item: CartProductType
}
const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
    const { handleRemoveProductFromCart, handleCartQtyIncrese, handleCartQtyDecrease } = useCart()
    return (
        <div className="grid grid-cols-5 py-4 border-t-[1.2px] border-slate-200 text-sm items-center">
            <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
                <Link href={`/productId/${item.id}`}>
                    <div className="w-[70px] aspect-square relative">
                        <Image src={item.selectedImage.image} alt={item.name}
                            fill className="object-contain"
                        />
                    </div>
                </Link>
                <div className="flex flex-col gap-1">
                    <Link href={`/productId/${item.id}`}>
                        {truncate(item.name)}
                    </Link>
                    <p>{item.selectedImage.color} </p>
                    <div className="w-[70px]">
                        <button className="underline text-slate-500"
                            onClick={() => handleRemoveProductFromCart(item)}>Remove</button>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">
                {formatePrice(item.price)}
            </div>
            <div className="justify-self-center">
                <SetQuantity cartCounter={true} cartProduct={item}
                    handleQtyDecrease={() => handleCartQtyDecrease(item)}
                    handleQtyIncrease={() => handleCartQtyIncrese(item)} />
            </div>
            <div className="justify-self-end">
                {formatePrice(item.quantity * item.price)}
            </div>
        </div>
    )
}

export default ItemContent