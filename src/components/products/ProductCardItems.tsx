import { ProductInterface } from "../../interface"
import { Link } from "react-router-dom";
import { Star } from "../ui/Star";



interface Props {
    product:ProductInterface
}

export const ProductCardItems = ({product}:Props ) => {
    const{id, image, name, price, inStock} = product;

  return (
    <div className="flex flex-col gap-2 items-center animate__animated animate__fadeIn">
        <Link to={`/product/${id}`} className="sm:text-sm text-xs font-semibold text-center m-w-[250px]">
            <img src={image[0].url} alt="" className="rounded-md m-w-[250px] m-auto object-cover" />
            <h1 className="mt-1 hover:underline hover:decoration-sky-500 transition-all ease-linear">{name} x({inStock}) </h1>
        </Link>
        <div className="text-sm font-semibold text-center">
            <div className="flex justify-center"><Star/></div>
            <p>$ {price}</p>
        </div>
    </div>
  )
}
