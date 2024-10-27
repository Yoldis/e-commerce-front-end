import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './uiSlice'
import { useSelector } from 'react-redux'
import { userSlice } from './userSlice'
import { productsSlice } from './productsSlice'
import { orderSlice } from './orderSlice'
import { cartSlice } from './cartSlice'

export const store = configureStore({
    reducer: {
        uiStore:uiSlice.reducer,
        userStore:userSlice.reducer,
        productsStore:productsSlice.reducer,
        orderStore:orderSlice.reducer,
        cartStore:cartSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const useUiStore = () => {
    return useSelector((state:RootState) => state.uiStore);
}

export const useUserStore = () => {
    return useSelector((state:RootState) => state.userStore);
}

export const useProductsStore = () => {
    return useSelector((state:RootState) => state.productsStore);
}

export const useCartStore = () => {
    return useSelector((state:RootState) => state.cartStore);
}

export const useOrderStore = () => {
    return useSelector((state:RootState) => state.orderStore);
}