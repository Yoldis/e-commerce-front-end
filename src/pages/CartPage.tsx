
import { OrderSummary, ItemstInCart, BackButton } from "../components";
import { useCartStoreHook } from "../hooks";

export const CartPage = () => {

  const {cart} = useCartStoreHook();

  return (
    <div className="sm:mx-24 mx-4 mt-5 animate__animated animate__fadeIn">
      <div className="">
        <div className="flex items-center gap-2 mb-3">
          <BackButton/>
          <h1 className="text-3xl font-bold ">Tú Carrito</h1>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {
            Object.values(cart).length === 0 ?
            <h1 className="sm:text-xl text-lg text-sky-500 font-semibold text-center col-span-2">Agrega Productos al carrito para realizar la compra!!</h1>
            :
            <>
              <ItemstInCart items={Object.values(cart)} />
              <OrderSummary total={Object.values(cart).reduce((acc, item) => (acc + item.subTotal), 0)} />
            </>
          }
        </section>
      </div>
    </div>
  );
};
