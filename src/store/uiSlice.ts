


import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'


export interface UiState {
  openSidebar: boolean
}

const initialState: UiState = {
  openSidebar:false,
}

export const uiSlice = createSlice({
  name: 'uiStore',
  initialState,
  reducers: {

    toggleSideBar:(state) => {
      if(state.openSidebar) state.openSidebar = false
      else state.openSidebar = true
    }
    
  },
})

export const { toggleSideBar } = uiSlice.actions

export default uiSlice.reducer