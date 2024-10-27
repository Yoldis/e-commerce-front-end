
import { OrderInterface } from '../interface';
import { customToast } from '../lib';
import { createOrderService, getOrdersAdminService, getOrdersService } from '../services';
import { createOrder, getOrders, getOrdersAdmin, setIsloading, updateOrder } from '../store/orderSlice';
import { clearCart } from '../store/cartSlice';
import { useOrderStore } from '../store/store';
import { useDispatch } from 'react-redux';



export const useOrderStoreHook = () => {
    const orderStore =  useOrderStore();
    const dispatch = useDispatch();

    const createOrderDispatch = async(order:OrderInterface) => {
        dispatch(setIsloading(true))
        const{ok, data, error} = await createOrderService(order);
        if(!ok) {
            customToast({title:"Algo salio mal al crear la orden", description:error ?? '', status:'error'});
            dispatch(setIsloading(false))
            return;
        }

        if(order.id) {
            if(data) dispatch(updateOrder(data.order))
        }
        else {
            if(data) dispatch(createOrder(data.order))
            dispatch(clearCart());
        }
        customToast({title:`Compra ${order.isPaid ? 'Realizada' : 'Guardada'} con exito.`, description:'Pedido.', status:'success'})
    }

    const getOrdersDispatch = async(userId:string) => {
        const{ok, data, error} = await getOrdersService(userId);
        if(!ok) {
            customToast({title:"Algo salio mal al crear la orden", description:error ?? '', status:'error'});
            dispatch(setIsloading(false))
            return;
        }
        if(data) dispatch(getOrders(data.orders))
    }

    const getOrdersAdminDispatch = async(userId:string) => {
        const{ok, data, error} = await getOrdersAdminService(userId);
        if(!ok) {
            customToast({title:"Algo salio mal al crear la orden", description:error ?? '', status:'error'});
            dispatch(setIsloading(false))
            return;
        }
        if(data) dispatch(getOrdersAdmin(data.orders))
    }


  return {
    ...orderStore,
    createOrderDispatch,
    getOrdersDispatch,
    getOrdersAdminDispatch
  }
}
