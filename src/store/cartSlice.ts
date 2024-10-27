




import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartInterface } from '../interface';


export interface CartState {
    cart:{[key:string]:CartInterface};
    totalUnit:number
}

const initialState: CartState = {
    cart:{},
    totalUnit:0
}

export const cartSlice = createSlice({
  name: 'cartStore',
  initialState,
  reducers: {

    addToCart:(state, {payload}:PayloadAction<CartInterface>) => {

        const item = state.cart[`${payload.id}/${payload.size}`];
        
        if(item) {
          item.unit = item.unit + payload.unit;
          item.subTotal = item.subTotal + payload.subTotal;
          state.cart[`${item.id}/${item.size}`] = item;
        }
        else state.cart[`${payload.id}/${payload.size}`] = payload;
  
        state.totalUnit = Object.values(state.cart).reduce((acc, item )=> {
          return acc + item.unit;
        }, 0);
  
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
  
      removeToCart:(state, {payload}:PayloadAction<CartInterface>) => {
        const item = state.cart[`${payload.id}/${payload.size}`];
        
        if(item) {
          if(item.unit === 1) delete state.cart[`${payload.id}/${payload.size}`];
          else {
            item.unit = item.unit - payload.unit;
            item.subTotal = item.unit * payload.price;
            state.cart[`${item.id}/${item.size}`] = item;
          }
  
          state.totalUnit = Object.values(state.cart).reduce((acc, item )=> {
            return acc + item.unit;
          }, 0);
        }
  
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
  
      removeAllItemToCart:(state, {payload}:PayloadAction<CartInterface>) => {
  
        delete state.cart[`${payload.id}/${payload.size}`];
  
        state.totalUnit = Object.values(state.cart).reduce((acc, item )=> {
          return acc + item.unit;
        }, 0);
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
  
      getItemCartStorage:(state, {payload}:PayloadAction<{[key:string]:CartInterface}>) => {
          state.cart = payload;
          state.totalUnit = Object.values(state.cart).reduce((acc, item )=> {
            return acc + item.unit;
          }, 0);
      },
  
  
      clearCart:(state) => {
        state.cart = {};
        state.totalUnit = 0;
        localStorage.setItem('cart', '{}');
      }
    
  },
})

export const { addToCart,removeToCart, removeAllItemToCart, getItemCartStorage, clearCart} = cartSlice.actions

export default cartSlice.reducer