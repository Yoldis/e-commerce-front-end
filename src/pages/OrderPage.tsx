import { useEffect, useState } from "react";
import { BackButton, CheckItemstInCart, CheckOrderSummary } from "../components";
import { useCartStoreHook, useOrderStoreHook } from "../hooks";
import { useLocation } from 'react-router-dom';
import { OrderInterface } from "../interface";


export const OrderPage = () => {
  const location = useLocation();
  const search  = new URLSearchParams(location.search);
  const id = search.get('id');
  const { cart } = useCartStoreHook();
  const{orders} = useOrderStoreHook();
  const[itemsInCart, setItemsInCart] = useState<OrderInterface>();

  useEffect(() => {
    if(id) {
      const order = orders.find(o => o.id === id);
      if(order) setItemsInCart(order)
    }
  }, [orders, id])

  return (
    <div className="sm:mx-24 mx-4 mt-5 animate__animated animate__fadeIn">
      <div className="">
        <div className="flex items-center gap-2 mb-3">
          <BackButton/>
          <h1 className="text-3xl font-bold ">Tú Carrito</h1>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {
            itemsInCart ? <>
              <CheckItemstInCart isPaid={itemsInCart.isPaid} items={itemsInCart.orderDetails} />
              <CheckOrderSummary orderId={itemsInCart.id} isPaid={itemsInCart.isPaid} items={itemsInCart.orderDetails} 
              />
            </>:
            <>
              <CheckItemstInCart items={Object.values(cart)} />
              <CheckOrderSummary items={Object.values(cart)}/> 
            </>
          }
        </section>
      </div>
    </div>
  );
};
