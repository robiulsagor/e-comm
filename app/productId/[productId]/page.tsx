import Container from "@/app/components/Container";
import Hr from "@/app/components/Hr";
import ProductDetails from "@/app/components/Products/ProductDetails";
import { formatePrice } from "@/utils/formatePrice";
// import { product } from "@/utils/product";
import { products } from "@/utils/products";
import { Rating } from "@mui/material";
import { useState } from "react";
import ListRating from "./ListRating";

interface IParams {
    productId: string
}

const Details = ({ params }: { params: IParams }) => {
    const product = products.find(product => product.id == params.productId)

    return (
        <div className=" py-4 px-2 md:py-4 md:px-8 ">
            <Container>
                <ProductDetails product={product} />

                <div className="flex flex-col mt-20 gap-4">
                    <div>Add Rating</div>
                    <ListRating product={product} />
                </div>
            </Container>
        </div>
    )
}

export default Details