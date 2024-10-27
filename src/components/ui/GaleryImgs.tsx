import { Link } from "react-router-dom";
import { ProductInterface } from "../../interface";
import { Star } from "./Star";

interface Props {
  products: ProductInterface[];
  title: string;
  to?: string;
}

export const GaleryImgs = ({ products, title, to }: Props) => {
  return (
    <section className=" my-10 mx-5 text-center animate__animated animate__fadeIn">
      <h1 className="text-3xl my-10 font-bold">{title}</h1>

      <article className="grid grid-cols-2 sm:grid-cols-5 rounded-md gap-3">
        {products.map((product) => (
          <div key={product.id} className="animate__animated animate__fadeIn">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image[0].url}
                className="rounded-md m-auto object-cover"
                alt=""
              />
              <p className="text-sm font-semibold mt-1">
                {product.name} x({product.inStock}){" "}
              </p>
            </Link>
            <div className="flex justify-center">
              <Star />
            </div>
            <p className="text-sm font-semibold">$ {product.price}</p>
          </div>
        ))}
      </article>
      {
        to && 
        <Link
          to={to}
          className="text-center mt-5 inline-block bg-black px-4 py-2 text-white rounded-full transition-all ease-linear active:scale-95"
        >
          Ver más
        </Link>
      }
    </section>
  );
};
