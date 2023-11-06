"use client"

import { CartProductType } from "./ProductDetails"

interface SetQtyProps {
    cartCounter?: boolean,
    cartProduct: CartProductType,
    handleQtyIncrease: () => void,
    handleQtyDecrease: () => void,
}

const btnStyles = "border-[1.2px] border-slate-300 hover:border-slate-600 transition-all px-2 rounded"

const SetQuantity: React.FC<SetQtyProps> = ({
    cartCounter, cartProduct, handleQtyDecrease, handleQtyIncrease
}) => {
    return (
        <div className="flex gap-4">
            {cartCounter ? null : <p className="uppercase font-bold"> quantity:</p>}

            <div className="flex items-center gap-4">
                <button onClick={handleQtyDecrease} className={btnStyles}>-</button>
                {cartProduct.quantity}
                <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
            </div>
        </div>
    )
}

export default SetQuantity