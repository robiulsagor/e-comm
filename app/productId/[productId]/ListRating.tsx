"use client"

import Avatar from "@/app/components/Avatar"
import Heading from "@/app/components/Heading"
import Hr from "@/app/components/Hr"
import { Rating } from "@mui/material"
import moment from "moment"
import Image from "next/image"

interface ListRatingProps {
    product: any
}

const ListRating: React.FC<ListRatingProps> = ({
    product
}) => {
    return (
        <div>
            <Heading title="Product Reviews" center={false} />
            <div className="text-sm mt-4 flex flex-col gap-2">
                {product.reviews && product.reviews.map((review: any) => {
                    return <div key={review.id} className="max-w-[300px]">
                        <div className="flex items-center gap-2 ">
                            {/* <div>
                                <Image
                                    src={review.user.image}
                                    alt="review user avatar"
                                    width={20}
                                    height={20}
                                    className="rounded-full"
                                />
                            </div> */}
                            <Avatar src={review.user.image} />
                            <div className="font-bold">{review.user.name} </div>
                            <div className="font-light text-slate-500">
                                {moment(review.createdDate).fromNow()}
                            </div>
                        </div>
                        <div className="mt-2">
                            <Rating value={review.rating} readOnly />
                            <div className="ml-2">
                                {review.comment}
                            </div>
                        </div>
                        <hr className="my-4" />
                    </div>
                })}
            </div>
        </div>
    )
}

export default ListRating