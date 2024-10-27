import { CartInterface } from "../../interface";
import { ItemsInCartItem } from "./ItemsInCartItem";

interface Props {
  items: CartInterface[];
}

export const ItemstInCart = ({ items }: Props) => {
  return (
    <div className="border rounded-xl p-4 ">
      {items.map((item) => (
        <ItemsInCartItem key={item.id + item.size} item={item} />
      ))}
    </div>
  );
};
