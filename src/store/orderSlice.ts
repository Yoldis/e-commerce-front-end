


import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { OrderInterface } from '../interface'


export interface OrderState {
    orders:OrderInterface[],
    ordersAdmin:OrderInterface[],
    isLoading:boolean
}

const initialState: OrderState = {
    orders:[],
    ordersAdmin:[],
    isLoading:false
}

export const orderSlice = createSlice({
  name: 'orderStore',
  initialState,
  reducers: {
    
    setIsloading:(state, {payload}:PayloadAction<boolean>) => {
        state.isLoading = payload;
    },

    createOrder:(state, {payload}:PayloadAction<OrderInterface>) => {
        state.orders.push(payload);
        state.ordersAdmin.push(payload);
        state.isLoading = false;
    },

    updateOrder:(state, {payload}:PayloadAction<OrderInterface>) => {
        state.orders = state.orders.map(order => order.id === payload.id ? payload : order);
        state.ordersAdmin = state.ordersAdmin.map(order => order.id === payload.id ? payload : order);
        state.isLoading = false;
    },

    getOrders:(state, {payload}:PayloadAction<OrderInterface[]>) => {
        state.orders = payload
    },

    getOrdersAdmin:(state, {payload}:PayloadAction<OrderInterface[]>) => {
        state.ordersAdmin = payload
    }

  },
})

export const { createOrder, updateOrder, setIsloading, getOrders, getOrdersAdmin } = orderSlice.actions

export default orderSlice.reducer