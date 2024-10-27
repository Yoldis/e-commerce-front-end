import { IoLogoPaypal, IoSaveSharp } from "react-icons/io5";
import { useOrderStoreHook, useProductsStoreHook, useUserStoreHook } from "../../hooks";
import { CartInterface } from "../../interface";
import { useMemo } from "react";

interface Props {
  items: CartInterface[];
  isPaid?:boolean,
  orderId?:string
}

export const CheckOrderSummary = ({ isPaid, items, orderId }: Props) => {
  const {user} = useUserStoreHook();
  const {getProductsDispatch} = useProductsStoreHook();
  const{createOrderDispatch, isLoading} = useOrderStoreHook();
  
  const total = useMemo(() => {
     return items.reduce(
      (acc, item) => acc + item.subTotal,
      0
    )
  }, [items])


  const onCreateOrder = async(isPaid:boolean) => {

    const orderDetails = items.map(i => {
      return {
        id:i.id,
        product:i.product,
        image:i.image,
        size:i.size,
        price:i.price,
        unit:i.unit,
        subTotal:i.subTotal,
      }
    });

    if(user?.id) {
      await createOrderDispatch({isPaid, orderDetails, userId:user.id, id:orderId});
      getProductsDispatch();
    }
  }

  if(!items.length)  {
    return (
      <h1 className="sm:text-xl text-lg text-sky-500 font-semibold text-center col-span-2">Agrega Productos al carrito para realizar la compra!!</h1>
    )
  }

  return (
    <div className="border rounded-xl p-4 h-fit">
      <div>
        <h1 className="text-lg font-bold mb-3">Detalles de la Orden</h1>
        <div className="flex gap-2 justify-between items-center mb-3">
          <p className="text-black/60">Subtotal</p>
          <p className=" font-semibold">$ ${total.toFixed(2)}</p>
        </div>

        <div className="flex gap-2 justify-between items-center mb-3">
          <p className="text-black/60">Descuento 2%</p>
          <p className="text-red-500 font-semibold">
            - {(total * 0.02).toFixed(2)}
          </p>
        </div>

        <div className="border-t mb-3" />

        <div className="flex gap-2 justify-between items-center mb-5 ">
          <p className="font-medium">Total</p>
          <p className="text-lg font-semibold">
            $ {(total - total * 0.02).toFixed(2)}
          </p>
        </div>
      {
        !isPaid &&
          <div className="flex flex-wrap items-center gap-3">
            {
              !orderId && 
                <button disabled={isLoading} onClick={() => onCreateOrder(false)} className={`
                  bg-black text-white w-full p-3 rounded-full flex items-center gap-2 justify-center active:scale-95 transition-all ease-linear ${isLoading ? 'animate-pulse' : ''}`}>
                  Guardar Orden{" "}
                  <span>
                    <IoSaveSharp size={25} />
                  </span>
                </button>
            }

            <button disabled={isLoading} onClick={() => onCreateOrder(true)} className={`
              bg-blue-800 text-white w-full p-3 rounded-full flex items-center gap-2 justify-center active:scale-95 transition-all ease-linear ${isLoading ? 'animate-pulse' : ''}`}>
              Realizar Pago{" "}
              <span>
                <IoLogoPaypal size={25} />
              </span>
            </button>
          </div>
      }

      </div>
    </div>
  );
};
