


import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductInterface } from '../interface'


export interface ProductsState {
    products:ProductInterface[]|null;
    searchedProducts:ProductInterface[]|null;

}

const initialState: ProductsState = {
    products:null,
    searchedProducts:null,
}

export const productsSlice = createSlice({
  name: 'productsStore',
  initialState,
  reducers: {

    getProducts:(state, {payload}:PayloadAction<ProductInterface[]>) => {
        state.products = payload
    },

    searchProducts:(state, {payload}:PayloadAction<ProductInterface[]>) => {
      state.searchedProducts = payload
    },
  },
})

export const { getProducts, searchProducts } = productsSlice.actions

export default productsSlice.reducer