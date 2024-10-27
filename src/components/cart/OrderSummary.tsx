import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useUserStoreHook } from "../../hooks";

interface Props {
  total:number
}


export const OrderSummary = ({total}:Props) => {
  const { user } = useUserStoreHook();

  return (
    <div className="border rounded-xl p-4 h-fit">
      <div>
        <h1 className="text-lg font-bold mb-3">Detalles de la Orden</h1>
        <div className="flex gap-2 justify-between items-center mb-3">
          <p className="text-black/60">Subtotal</p>
          <p className=" font-semibold">$ {total.toFixed(2)}</p>
        </div>

        <div className="flex gap-2 justify-between items-center mb-3">
          <p className="text-black/60">Descuento 2%</p>
          <p className="text-red-500 font-semibold">- {(total * 0.02).toFixed(2)}</p>
        </div>

        <div className="border-t mb-3" />

        <div className="flex gap-2 justify-between items-center mb-5">
          <p className="font-medium">Total</p>
          <p className="text-lg font-semibold">$ {(total - (total * 0.02)).toFixed(2)}</p>
        </div>

        <Link
          to={user ? "/order" : "/auth/login"}
          className="bg-black text-white w-full p-3 rounded-full flex items-center gap-2 justify-center active:scale-95 transition-all ease-linear"
        >
          Checkout Order{" "}
          <span>
            <IoArrowForwardSharp size={25} />
          </span>
        </Link>
      </div>
    </div>
  );
};
