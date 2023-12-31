
import { CartProductType } from "@/app/components/Products/ProductDetails"
import { createContext, useContext, useState, useCallback } from "react"
import toast from 'react-hot-toast';
import { useEffect } from "react"

interface cartContextType {
    cartTotalQty: number;
    cartTotalAmount: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleCartQtyIncrese: (product: CartProductType) => void;
    handleCartQtyDecrease: (product: CartProductType) => void;
    handleRemoveAllProductFromCart: () => void;
    paymentIntent: string | null;
    handleSetPaymentIntent: (val: string | null) => void
}

interface Props {
    [propName: string]: any
}

export const CartContext = createContext<cartContextType | null>(null)

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [cartTotalAmount, setCartTotalAmount] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)
    const [paymentIntent, setPaymentIntent] = useState<string | null>(null)

    const handleAddProductToCart = useCallback(
        (product: CartProductType) => {
            setCartProducts((prev) => {
                let updatedCart;

                if (prev) {
                    updatedCart = [...prev, product]
                } else {
                    updatedCart = [product]
                }

                toast.success("Product added to cart.", { id: "productAdded" })
                localStorage.setItem("eCommShoppingCart", JSON.stringify(updatedCart))
                return updatedCart
            })
        },
        [],
    )

    const handleRemoveProductFromCart = useCallback(
        (product: CartProductType) => {
            if (cartProducts) {
                const filteredProducts = cartProducts?.filter((item) => item.id !== product.id)
                toast.success("Product removed from cart.", { id: "productAdded" })
                setCartProducts(filteredProducts)
                localStorage.setItem("eCommShoppingCart", JSON.stringify(filteredProducts))
            }

        }, [cartProducts])

    const handleRemoveAllProductFromCart = useCallback(
        () => {
            toast.success("All products has been removed!", { id: "productAdded" })
            setCartProducts(null)
            setCartTotalQty(0)
            localStorage.setItem("eCommShoppingCart", JSON.stringify(null))
        },
        [cartProducts])

    // cart page product quantity increase
    const handleCartQtyIncrese = useCallback(
        (product: CartProductType) => {
            let updatedCart;

            if (product.quantity == 99) {
                return toast.error("Ooops! Maximum reached", { id: "productAdded" })
            }

            if (cartProducts) {
                updatedCart = [...cartProducts]
                const existingIndex = cartProducts.findIndex((item) => item.id === product.id)
                if (existingIndex > -1) {
                    updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity
                }
                setCartProducts(updatedCart)
                localStorage.setItem("eCommShoppingCart", JSON.stringify(updatedCart))
            }
        }, [cartProducts])

    // cart page product quantity increase
    const handleCartQtyDecrease = useCallback(
        (product: CartProductType) => {
            let updatedCart;
            if (product.quantity == 1) {
                return toast.error("Oops! Minimum reached", { id: "productAdded" })
            }
            if (cartProducts) {
                updatedCart = [...cartProducts]
                const existingIndex = cartProducts.findIndex((item) => item.id === product.id)
                if (existingIndex > -1) {
                    updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity
                }
                setCartProducts(updatedCart)
                localStorage.setItem("eCommShoppingCart", JSON.stringify(updatedCart))
            }
        }, [cartProducts])

    useEffect(() => {
        const productFromLocalStorage = JSON.parse(localStorage.getItem("eCommShoppingCart")!)
        if (productFromLocalStorage) {
            setCartProducts(productFromLocalStorage)
        }

        const eCommPaymentIntent: any = localStorage.getItem("eCommPaymentIntent")
        const paymentIntent: string | null = JSON.parse(eCommPaymentIntent)

        setPaymentIntent(paymentIntent)
    }, [])

    useEffect(() => {
        const getTotals = () => {
            if (cartProducts) {
                const { total, qty } = cartProducts?.reduce((acc, item) => {
                    const itemTotal = item.quantity * item.price
                    acc.total += itemTotal
                    acc.qty += item.quantity
                    return acc
                }, {
                    total: 0,
                    qty: 0
                })
                setCartTotalQty(qty)
                setCartTotalAmount(total)
            }
        }

        getTotals()
    }, [cartProducts])

    const handleSetPaymentIntent = useCallback((val: string | null) => {
        setPaymentIntent(val)
        localStorage.setItem("eCommPaymentIntent", JSON.stringify(val))
    }, [paymentIntent])

    const value = {
        cartTotalQty,
        cartTotalAmount,
        cartProducts,
        paymentIntent,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrese,
        handleCartQtyDecrease,
        handleRemoveAllProductFromCart,
        handleSetPaymentIntent
    }

    return <CartContext.Provider value={value} {...props} />
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider.")
    }
    return context
}