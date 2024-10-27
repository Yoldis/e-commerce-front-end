




import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../interface/user.interface';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    user:UserInterface|null,
    users:UserInterface[]
    loading:boolean,
}

const initialState: UserState = {
    user:null,
    users:[],
    loading:false,
}

export const userSlice = createSlice({
    name: 'userStore',
    initialState,

    reducers: {

        setLoading:(state, {payload}:PayloadAction<boolean>) => {
            state.loading = payload
        },

        login:(state, {payload}:PayloadAction<UserInterface>) => {
            state.user = payload;
            state.loading = false;
        },

        logout:(state) => {
            state.user = null;
            state.loading = false;
        },

        getUsers:(state, {payload}:PayloadAction<UserInterface[]>) => {
            state.users = payload;
        },
    },
})

export const { login, logout, setLoading, getUsers } = userSlice.actions

export default userSlice.reducer