import { products } from "@/utils/products"
import ProductList from "./ProductList"

const Products = () => {
    return (
        <div className="mt-10">
            <div className={`grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5 `}>
                {products.map(product => (
                    <ProductList key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products