"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { products } from '@/utils/products';
import { formatePrice } from '@/utils/formatePrice';
import { Rating } from '@mui/material';
import Hr from '../Hr';
import SetColor from './SetColor';
import SetQuantity from './SetQuantity';
import Button from '../Button';
import Image from 'next/image';
import ProductImage from './ProductImage';
import { useCart } from '@/hooks/useCart';
import { BiCheckCircle, BiMessageRoundedCheck } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    quantity: number,
    price: number,
    selectedImage: SelectedImageType
}

export type SelectedImageType = {
    color: string,
    colorCode: string,
    image: string
}

const ProductDetails = ({ product }: any) => {
    const router = useRouter()
    const { cartProducts, cartTotalQty, handleAddProductToCart } = useCart()
    const [isProductInCart, setIsProductInCart] = useState(false)

    const productRating = product.reviews.reduce((acc: any, item: any) => item.rating + acc, 0) / product.reviews.length

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        quantity: 1,
        price: product.price,
        selectedImage: { ...product.images[0] }
    })

    const handleColorSelect = useCallback(
        (value: SelectedImageType) => {
            setCartProduct(prev => {
                return { ...prev, selectedImage: value }
            })
        },
        [cartProduct.selectedImage],
    )

    const handleQtyIncrease = useCallback(
        () => {
            if (cartProduct.quantity === 99) {
                return
            }

            setCartProduct(prev => {
                return { ...prev, quantity: prev.quantity + 1 }
            })
        },
        [cartProduct.quantity],
    )

    const handleQtyDecrease = useCallback(
        () => {
            if (cartProduct.quantity === 1) {
                return
            }

            setCartProduct(prev => {
                return { ...prev, quantity: prev.quantity - 1 }
            })
        },
        [cartProduct.quantity],
    )

    useEffect(() => {
        setIsProductInCart(false)

        if (cartProducts) {
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)
            if (existingIndex > -1) {
                setIsProductInCart(true)
            }
        }
    }, [cartProducts])

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                <ProductImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect} />

                <div className="flex flex-col gap-3 ">
                    <h2 className="text-xl xl:text-2xl">{product.name} </h2>
                    <p className="text-2xl lg:text-3xl font-bold  text-slate-600">{formatePrice(product.price)} </p>

                    <div className="flex gap-2 text-sm items-center">
                        <Rating value={productRating} readOnly />
                        <p>{product.reviews.length} reviews </p>
                    </div>

                    <Hr />
                    <p className="text-slate-500 ">{product.description} </p>
                    <p className="text-sm">
                        <span className="font-bold uppercase mr-1">category:</span>
                        <span>{product.category} </span>
                    </p>
                    <p className="text-sm">
                        <span className="font-bold uppercase mr-1">brand:</span>
                        <span>{product.brand} </span>
                    </p>

                    <div className={`${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                        <p>
                            {product.inStock ? "In " : "Out of "} stock
                        </p>
                    </div>

                    <Hr />
                    {isProductInCart ? <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-3'>
                            <BiCheckCircle className="text-teal-600" size={24} />
                            <span className='text-slate-500'> Product Added to cart</span>
                        </div>
                        <div className='max-w-[300px]'>
                            <Button
                                label='View Cart'
                                onClick={() => { router.push("/cart") }}
                                outline
                            />
                        </div>
                    </div>
                        : <>
                            <SetColor
                                cartProduct={cartProduct}
                                images={product.images}
                                handleColorSelect={handleColorSelect}
                            />
                            <Hr />
                            <SetQuantity
                                cartCounter={false}
                                cartProduct={cartProduct}
                                handleQtyIncrease={handleQtyIncrease}
                                handleQtyDecrease={handleQtyDecrease}
                            />
                            <Hr />
                            <div className='max-w-[300px]'>
                                <Button
                                    label='ADD TO CART'
                                    onClick={() => handleAddProductToCart(cartProduct)}
                                />
                            </div>
                        </>}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails