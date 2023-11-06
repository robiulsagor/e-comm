import { truncate } from '@/utils/truncate';
import Image from 'next/image'
import React from 'react'
import { Rating } from '@mui/material';
import { formatePrice } from '@/utils/formatePrice';
import Link from 'next/link';

interface productRatingProps {
    acc: number;
    item: any
}

const ProductList = ({ product }: any) => {
    const productRating = product.reviews.reduce((acc: any, item: any) => item.rating + acc, 0) / product.reviews.length

    return (
        <div className='border p-4 rounded col-span-1 transition-all hover:scale-105 cursor-pointer text-center'>
            <Link href={`/productId/${product.id}`}>
                <div className='w-full flex flex-col gap-2 items-center justify-start  '>
                    <div className=' aspect-square '>
                        <Image src={product.images[0].image}
                            alt='Product Image'
                            width={180}
                            height={100}
                            className='xs:w-32 xs:h-36 md:w-36 md:h-40'
                        />
                    </div>
                    <h3 className='mt-2 xl:mt-4'>
                        {truncate(product.name)}
                    </h3>
                    <div>
                        <Rating value={productRating} readOnly />
                    </div>
                    <p className='text-sm'> {product.reviews.length} Reviews</p>
                    <p className='font-bold text-sm'>{formatePrice(product.price)}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductList