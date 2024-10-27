import { ProductInterface } from "../../interface"
import { ProductCardItems } from "./ProductCardItems"


interface Props {
    products:ProductInterface[]
}

export const ProductCard = ({products}:Props) => {

  return (
    <div className=" m-5 mt-10 grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] sm:gap-10 gap-5">
        {
            products.map(product => (
                <ProductCardItems key={product.id} product={product} />
            ))
        }
    </div>
  )
}
