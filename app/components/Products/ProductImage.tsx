import Image from "next/image"
import { CartProductType, SelectedImageType } from "./ProductDetails"

interface ProductImageProps {
    cartProduct: CartProductType,
    product: any,
    handleColorSelect: (value: SelectedImageType) => void
}
const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct, product, handleColorSelect
}) => {
    return (
        <div className="grid grid-cols-6  h-full min-h-[300px] max-h-[500px] sm:min-h-[400px]">
            <div className="flex flex-col gap-4 items-center justify-center cursor-pointer border h-full min-h-[300px] max-h-[500px] sm:min-h-[400px]">
                {product.images.map((image: any) => (
                    <div key={image.color}>
                        <Image key={image.color}
                            src={image.image}
                            height={80}
                            width={80}
                            className="w-[50px]"
                            alt="img"
                            onClick={() => handleColorSelect(image)}
                        />
                    </div>
                ))}

            </div>
            <div className="col-span-5 text-center mx-auto">
                <Image
                    src={cartProduct.selectedImage.image}
                    alt="Product Image"
                    width={400}
                    height={500}

                />
            </div>
        </div>
    )
}

export default ProductImage