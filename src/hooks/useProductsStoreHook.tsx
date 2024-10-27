

import { getProductsService, searchProductsService } from "../services";
import { getProducts, searchProducts } from "../store/productsSlice";
import { useProductsStore } from "../store/store"
import { useDispatch } from 'react-redux';


export const useProductsStoreHook = () => {
    const productsStore = useProductsStore();
    const dispatch = useDispatch();


    const getProductsDispatch = async() => {
        const {ok, data,} = await getProductsService();
        if(!ok) return;
        if(data?.products) dispatch(getProducts(data?.products));
    }

    const searchProductsDispatch = async(search:string) => {
        const {ok, data,} = await searchProductsService(search);
        if(!ok) return dispatch(searchProducts([]));
        if(data?.products) dispatch(searchProducts(data?.products));
    }


  return {
    ...productsStore,
    getProductsDispatch,
    searchProductsDispatch,
  }
}
