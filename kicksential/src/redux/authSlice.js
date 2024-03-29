import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth_token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    isAuthenticated: localStorage.getItem("isAuthenticated") ? JSON.parse(localStorage.getItem("isAuthenticated")) : false
}

const authSlice = createSlice({
    name:"authentication",
    initialState,
    reducers: {

        setToken(state, action) {
            state.auth_token = action.payload
            state.isAuthenticated = true

            localStorage.setItem('token', state.auth_token)
            localStorage.setItem('isAuthenticated', state.isAuthenticated)
        },

        removeToken(state){
            state.auth_token = ''
            state.isAuthenticated = false

            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.setItem('isAuthenticated', state.isAuthenticated)
        }
    }

})

export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;