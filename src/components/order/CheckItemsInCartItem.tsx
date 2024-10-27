import { CartInterface } from "../../interface";

interface Props {
  item: CartInterface;
}

export const CheckItemsInCartItem = ({ item }: Props) => {
  const { product, image, price, size, subTotal, unit } = item;

  return (
    <div className="border-t py-3 select-none">
      <div className="flex gap-3">
        <img
          src={image}
          className="w-[150px] h-[150px] rounded-md object-cover"
          alt=""
        />

        <div>
          <h1 className="font-bold sm:text-sm text-xs mb-1">
            {product} x({unit})
          </h1>
          <p className="font-medium sm:text-sm text-xs">
            Size: <span className="font-semibold text-black/70">{size}</span>
          </p>
          <p className="font-semibold text-sm mt-5">Precio: $ {price}</p>
          <p className="font-semibold  text-sm text-sky-500 ">
            Total: $ {subTotal.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
