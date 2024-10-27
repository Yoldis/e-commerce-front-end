import { useDispatch } from "react-redux";
import { useCartStore } from "../store/store"
import { addToCart, getItemCartStorage, removeAllItemToCart, removeToCart } from "../store/cartSlice";
import { CartInterface } from "../interface";




export const useCartStoreHook = () => {
    const cartStore = useCartStore();
    const dispatch = useDispatch();

    
    const addToCartDispatch = (item:CartInterface) =>{
        dispatch(addToCart(item));
      }
  
      const removeToCartDispatch = (item:CartInterface) =>{
        dispatch(removeToCart(item));
      }
      
      const removeToAllItemCartDispatch = (item:CartInterface) =>{
        dispatch(removeAllItemToCart(item));
      }
  
      const getItemCartStorageDispatch = () => {
  
        const storage  = localStorage.getItem('cart') ?? '{}'
        dispatch(getItemCartStorage(JSON.parse(storage)))
      }

  return {
    ...cartStore,
    addToCartDispatch,
    removeToCartDispatch,
    removeToAllItemCartDispatch,
    getItemCartStorageDispatch
  }
}
