import { IoCard } from "react-icons/io5";
import { CartInterface } from "../../interface";
import { CheckItemsInCartItem } from "./CheckItemsInCartItem";

interface Props {
  items: CartInterface[];
  isPaid?:boolean
}

export const CheckItemstInCart = ({ items, isPaid }: Props) => {
  return (
    <>
        {
          items.length ?  
          <div className="border rounded-xl p-4 ">
            <div className={`${isPaid ? "bg-green-500 " : "bg-red-500 "}text-white font-semibold flex items-center gap-2 p-2 rounded-md`}>
              <IoCard size={20} />
              {isPaid ? "Pagado" : "No Pagado"}
            </div>

            {items.map((item) => (
              <CheckItemsInCartItem key={item.id + item.size} item={item} />
            ))}
          </div> : <></>
        }
    </>
  );
};
