import { IoTrashSharp } from "react-icons/io5";
import { AddToCartCounter } from "./AddToCartCounter";
import { CartInterface } from "../../interface";
import { useCartStoreHook, useProductsStoreHook } from "../../hooks";
import { customToast } from "../../lib";
import { Link } from "react-router-dom";
import { useMemo } from "react";

interface Props {
  item: CartInterface;
}

export const ItemsInCartItem = ({ item }: Props) => {
  const { product, image, price, size, unit, subTotal, id } = item;
  const {products} = useProductsStoreHook();
  const {addToCartDispatch, removeToCartDispatch, removeToAllItemCartDispatch, cart} = useCartStoreHook();
  
  const unitsInCart = useMemo(() => {
    return Object.values(cart).filter(p => p.id === id)
    .reduce(((acc, item ) => {
      return acc + item.unit
    }), 0);
    
  }, [cart, id])

  const productById = useMemo(() => {
      return products?.find(p => p.id == id);
  }, [products, id])

  const onCounter = (operation:string) => {
    if(operation === 'add') {

      if(unitsInCart + 1 > productById!.inStock) return customToast({title:'Producto al limite', description:`No puedes seleccionar mas de ${productById!.inStock - unitsInCart} productos`, status:'error'});
      addToCartDispatch({...item, unit:1});
    }
    else if(operation === 'remove'){
      removeToCartDispatch({...item, unit:1})
    }
  }

  const onDeleteAllItemToCart = () => {
    removeToAllItemCartDispatch(item);
  }

  return (
    <div className="grid sm:grid-cols-[300px_200px] grid-cols-[200px_100px] border-t py-3">
      <div className="flex gap-3">
        <img
          src={image}
          className="w-[150px] h-[150px] rounded-md object-cover"
          alt=""
        />

        <div>
          <Link to={`/product/${id}`} className="font-bold sm:text-sm text-xs mb-1 hover:underline hover:decoration-sky-500">{product} x({unit})</Link>
          <p className="font-medium sm:text-sm text-xs">
            Size: <span className="font-semibold text-black/70">{size}</span>
          </p>
          <p className="font-semibold text-sm mt-5">Precio: $ {price}</p>
          <p className="font-semibold  text-sm text-sky-500 ">Total: $ {subTotal.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end justify-self-end">
        <button onClick={onDeleteAllItemToCart}>
          <IoTrashSharp size={20} className="text-red-500 cursor-pointer active:scale-95 " />
        </button>
        <AddToCartCounter counter={unit} onCounter={onCounter} size={17} className={{ className: "px-2 py-1 " }} />
      </div>
    </div>
  );
};
