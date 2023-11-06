import { CartProductType, SelectedImageType } from "./ProductDetails"

interface SetColorProps {
    images: SelectedImageType[],
    cartProduct: CartProductType,
    handleColorSelect: (value: any) => void
}

const SetColor: React.FC<SetColorProps> = ({
    images, cartProduct, handleColorSelect
}) => {
    return (
        <div>
            <div className="flex gap-4 items-center">
                <span className="uppercase font-bold ">color:</span>
                {
                    images.map(image => {
                        return <div key={image.color}
                            onClick={() => handleColorSelect(image)}
                            className={`h-7 w-7 border  rounded-full flex items-center justify-center ${cartProduct.selectedImage.color === image.color ? "border-teal-400" : ""}`}
                        >

                            <div className="h-5 w-5 border border-slate-400 rounded-full cursor-pointer"
                                style={{ background: image.colorCode }}>
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SetColor